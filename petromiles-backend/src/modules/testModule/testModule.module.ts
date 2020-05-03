import { Module } from '@nestjs/common';
import { TestModuleController } from './testModule.controller';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { CreateWinstonOptions } from '../../../loggers/Winston.Config.Service';

@Module({
  imports: [
    ConfigModule,
    WinstonModule.forRoot(
      new CreateWinstonOptions().createOptions('petromiles-global-info.log'),
    ),
  ],
  controllers: [TestModuleController],
})
export class TestModule {}
