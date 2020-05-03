import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformInterest } from '../../../models/platform_interest/platform_interest.entity';
import { PlatformInterestSeederService } from './platform_interest.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlatformInterest])],
  providers: [PlatformInterestSeederService],
  exports: [PlatformInterestSeederService],
})
export class PlatformInterestSeederModule {}
