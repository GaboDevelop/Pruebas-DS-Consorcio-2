import { UserDetails } from '../user_details/user_details.entity';
import { Bank } from '../bank/bank.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_country: number;

  @Column({ unique: true })
  name: string;
}
