import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

import { DatabaseModule } from './database/database.module';
import { APP_FILTER } from '@nestjs/core';
import { PostgreExceptionFilter } from './exceptions/postgre-exception.filter';
import { TestModule } from './modules/testModule/testModule.module';

@Module({
  imports: [
    TestModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env.' + process.env.NODE_ENV,
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PostgreExceptionFilter,
    },
  ],
})
export class AppModule {}
