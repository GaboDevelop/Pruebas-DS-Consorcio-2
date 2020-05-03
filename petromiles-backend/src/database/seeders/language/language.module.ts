import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from '../../../models/language/language.entity';
import { LanguageSeederService } from './Language.service';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageSeederService],
  exports: [LanguageSeederService],
})
export class LanguageSeederModule {}
