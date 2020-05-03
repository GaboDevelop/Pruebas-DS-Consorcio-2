import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsConversion } from '../../../models/points_conversion/points_conversion.entity';
import { PointsConversionSeederService } from './points_conversion.service';

@Module({
  imports: [TypeOrmModule.forFeature([PointsConversion])],
  providers: [PointsConversionSeederService],
  exports: [PointsConversionSeederService],
})
export class PointsConversionSeederModule {}
