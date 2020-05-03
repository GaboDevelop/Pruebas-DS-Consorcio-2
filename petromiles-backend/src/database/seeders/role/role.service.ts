import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, InsertResult } from 'typeorm';

import { Role } from '../../../models/role/role.entity';
import { ROLES } from './role.data';

@Injectable()
export class RolesSeederService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  createRole(): Promise<InsertResult>[] {
    return ROLES.map(role => this.roleRepository.insert(role));
  }
}
