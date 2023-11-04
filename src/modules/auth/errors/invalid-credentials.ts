import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentials extends HttpException {
  constructor() {
    super('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}
