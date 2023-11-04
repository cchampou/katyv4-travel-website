import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountAlreadyExist } from './errors/account-already-exist';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Account) private accountRepository: Repository<Account>) {}

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

  getAllAccounts() {
    return this.accountRepository.find();
  }
}
