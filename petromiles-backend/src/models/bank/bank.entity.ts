import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Country } from '../country/country.entity';
import { RoutingNumber } from '../routing_number/routing_number.entity';

@Entity()
export class Bank extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_bank: number;

  @Column()
  name: string;

  @ManyToOne(
    type => Country,
    country => country.id_country,
    { nullable: true },
  )
  @JoinColumn({ name: 'fk_country' })
  country: Country;
}
