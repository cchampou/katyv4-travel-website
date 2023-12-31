import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    if (exception.getStatus() >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(exception.getResponse());
      this.logger.error(exception.stack);
    }

    response.status(exception.getStatus()).send(exception.getResponse());
  }
}
