import { HttpException, HttpStatus } from '@nestjs/common';

export class AccountAlreadyExist extends HttpException {
  constructor() {
    super('Account already exists', HttpStatus.CONFLICT);
  }
}
