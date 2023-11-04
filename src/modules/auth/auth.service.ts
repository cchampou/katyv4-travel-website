import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountAlreadyExist } from './errors/account-already-exist';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { InvalidCredentials } from './errors/invalid-credentials';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt-payload.dto';
import { Roles } from './entities/roles.entity';
import { RoleDto } from './dto/role.dto';

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

  /**
   * Create a new user account.
   *
   * @param {CreateAccountDto} account - The user account information, including name and password.
   * @returns {Promise<void>} A Promise that resolves when the account is successfully created.
   * @throws {AccountAlreadyExist} If an account with the same name already exists.
   */
  async createAccount(account: CreateAccountDto): Promise<void> {
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

  /**
   * Authenticate a user and generate a JWT token.
   *
   * @param {LoginDto} account - The user's login information, including their name and password.
   * @returns {Promise<{ token: string }>} A JWT token if authentication is successful.
   * @throws {InvalidCredentials} If the provided credentials are invalid.
   */
  async login(account: LoginDto): Promise<{ token: string }> {
    const matchedAccount = await this.accountRepository.findOneBy({ name: account.name });
    const isValidPassword = await bcrypt.compare(account.password, matchedAccount.hashedPassword);

    if (!matchedAccount || !isValidPassword) {
      throw new InvalidCredentials();
    }

    const jwtPayload: JwtPayload = {
      id: matchedAccount.id,
      roles: matchedAccount.roles,
    };

    return {
      token: this.jwtService.sign(jwtPayload, this.jwtOptions),
    };
  }

  async addRole(accountId: number, roleDto: RoleDto) {
    const role = roleDto.role as Roles;
    const account = await this.accountRepository.findOneBy({ id: accountId });
    const roleAlreadyExists = account && account.roles.includes(role);

    if (!account || roleAlreadyExists) {
      throw new BadRequestException();
    }

    account.roles.push(role);

    return this.accountRepository.save(account);
  }

  async removeRole(accountId: number, roleDto: RoleDto) {
    const role = roleDto.role as Roles;
    const account = await this.accountRepository.findOneBy({ id: accountId });

    if (!account) {
      throw new BadRequestException();
    }

    account.roles = account.roles.filter((r) => r !== role);

    return this.accountRepository.save(account);
  }

  getRoles(): Roles[] {
    return Object.values(Roles);
  }

  getAccounts() {
    return this.accountRepository.find();
  }

  private hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
