import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, InsertResult } from 'typeorm';
import { Country } from '../../../models/country/country.entity';
import { COUNTRIES } from './country.data';

@Injectable()
export class CountrySeederService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  createCountry(): Promise<InsertResult>[] {
    return COUNTRIES.map(country => this.countryRepository.insert(country));
  }
}
