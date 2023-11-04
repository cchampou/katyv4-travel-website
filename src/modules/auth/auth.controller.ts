import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() account: CreateAccountDto) {
    return this.authService.createAccount(account);
  }

  @Get()
  getAll() {
    return this.authService.getAllAccounts();
  }
}
