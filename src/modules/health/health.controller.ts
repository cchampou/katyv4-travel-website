import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(HttpStatus.NO_CONTENT)
  // eslint-disable-next-line no-empty-function
  getHealth() {
    return {};
  }
}
