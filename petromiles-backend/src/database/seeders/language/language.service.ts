import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, InsertResult } from 'typeorm';

import { Language } from '../../../models/language/language.entity';
import { LANGUAGES } from './language.data';

@Injectable()
export class LanguageSeederService {
  constructor(
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
  ) {}

  createLanguage(): Promise<InsertResult>[] {
    return LANGUAGES.map(language => this.languageRepository.insert(language));
  }
}
