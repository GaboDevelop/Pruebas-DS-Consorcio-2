import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, InsertResult } from 'typeorm';

import { ThirdPartyInterest } from '../../../models/third_party_interest/third_party_interest.entity';
import { THIRD_PARTY_INTEREST } from './third_party_interest.data';

@Injectable()
export class ThirdPartyInterestSeederService {
  constructor(
    @InjectRepository(ThirdPartyInterest)
    private readonly thirdPartyInterestRepository: Repository<
      ThirdPartyInterest
    >,
  ) {}

  createThirdPartyInterest(): Promise<InsertResult>[] {
    return THIRD_PARTY_INTEREST.map(thirdPartyInterest =>
      this.thirdPartyInterestRepository.insert(thirdPartyInterest),
    );
  }
}
