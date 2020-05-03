import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '../../../models/country/country.entity';
import { CountrySeederService } from './country.service';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountrySeederService],
  exports: [CountrySeederService],
})
export class CountrySeederModule {}
