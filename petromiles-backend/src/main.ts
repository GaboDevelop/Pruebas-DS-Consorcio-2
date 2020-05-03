import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { PostgreExceptionFilter } from './exceptions/postgre-exception.filter';
import { AllExceptionsFilter } from './exceptions/all-exception.filter';
import { WinstonModule } from 'nest-winston';
import * as helmet from 'helmet';
import { CreateWinstonOptions } from '../loggers/Winston.Config.Service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  };

  app.enableCors(options);
  app.use(helmet());
  app.setGlobalPrefix('/api/v1');

  const logger = WinstonModule.createLogger(
    new CreateWinstonOptions().createOptions('petromiles-global-error.log'),
  );

  app.useGlobalFilters(
    new PostgreExceptionFilter(),
    new AllExceptionsFilter(logger),
  );

  await app.listen(port, () => console.log(`Server is running on ${port}`));
}
bootstrap();
