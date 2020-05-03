import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../../models/role/role.entity';
import { RolesSeederService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesSeederService],
  exports: [RolesSeederService],
})
export class RoleSeederModule {}
