import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountAlreadyExist } from './errors/account-already-exist';
import * as bcrypt from 'bcrypt';
import { AccountConnectionDto } from './dto/account-connection.dto';
import { InvalidCredentials } from './errors/invalid-credentials';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly jwtOptions: { secret: string };

  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
    private jwtService: JwtService,
  ) {
    this.jwtOptions = {
      secret: process.env.JWT_SECRET,
    };
  }

  async createAccount(account: CreateAccountDto) {
    const accountAlreadyExists = await this.accountRepository.findOneBy({ name: account.name });

    if (accountAlreadyExists) {
      throw new AccountAlreadyExist();
    }

    const newAccount = this.accountRepository.create({
      name: account.name,
      hashedPassword: await this.hashPassword(account.password),
    });

    this.accountRepository.save(newAccount);
  }

  private hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async validateAccount(account: AccountConnectionDto) {
    const matchedAccount = await this.accountRepository.findOneBy({ name: account.name });
    const isValidPassword = await bcrypt.compare(account.password, matchedAccount.hashedPassword);

    if (!matchedAccount || !isValidPassword) {
      throw new InvalidCredentials();
    }

    return this.jwtService.sign({ id: matchedAccount.id }, this.jwtOptions);
  }

  getAllAccounts() {
    return this.accountRepository.find();
  }
}
