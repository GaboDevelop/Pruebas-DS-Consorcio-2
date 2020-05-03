import * as winston from 'winston';
import { consoleFormat, fileFormat } from './common/loggerCommonFormat';
import { WinstonOptions } from './WinstonConfig.interface';

export class CreateWinstonOptions implements WinstonOptions {
  createOptions(directory: string) {
    const options = {
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: consoleFormat,
        }),
        new winston.transports.File({
          level: 'debug',
          format: fileFormat,
          maxsize: 5120000,
          maxFiles: 5,
          filename: `${__dirname}/../../loggers/${directory}`,
        }),
      ],
    };

    return options;
  }
}
