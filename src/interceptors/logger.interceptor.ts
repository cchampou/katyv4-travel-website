import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';
import { CustomLogger } from '../modules/logger/logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new CustomLogger('HTTP');
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<FastifyRequest>();
    if (request.method !== 'OPTIONS' && request.method !== 'HEAD') {
      this.logger.log(`${request.method} ${request.raw.url}`);
      if (request.body && request.raw.url !== '/api/auth/login') {
        this.logger.debug('Body data :', request.body);
      }
    }
    return next.handle();
  }
}
