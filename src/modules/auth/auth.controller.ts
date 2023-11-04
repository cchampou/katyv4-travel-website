import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AuthService } from './auth.service';
import { RoleDto } from './dto/role.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  create(@Body() account: CreateAccountDto) {
    return this.authService.createAccount(account);
  }

  @Post('login')
  login(@Body() account: CreateAccountDto) {
    return this.authService.login(account);
  }

  @Post('account/:id/role')
  addRole(@Param('id') id: string, @Body() role: RoleDto) {
    return this.authService.addRole(+id, role);
  }

  @Delete('account/:id/role')
  removeRole(@Param('id') id: string, @Body() role: RoleDto) {
    return this.authService.removeRole(+id, role);
  }

  @Get('roles')
  getRoles() {
    return this.authService.getRoles();
  }

  @Get()
  getAccounts() {
    return this.authService.getAccounts();
  }
}
