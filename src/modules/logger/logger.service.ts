import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';
import { AxiosError } from 'axios';

@Injectable()
export class CustomLogger extends ConsoleLogger implements LoggerService {
  debug(message: any, ...optionalParams: [...any, string?]): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (process.env.DEBUG == true) {
      super.debug(message, ...optionalParams);
    }
  }

  logAxiosError<T = any>(error: AxiosError<T, any>) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      this.debug(`Returned data with code ${error.response.status} :`, error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      this.debug(`Returned data :`);
      this.debug(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      this.debug('An error occured while setting up the request');
      this.debug(error.message);
    }
  }
}
