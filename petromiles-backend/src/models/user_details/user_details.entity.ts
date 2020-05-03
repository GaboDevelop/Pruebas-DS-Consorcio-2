import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { UserClient } from '../user_client/user_client.entity';
import { Language } from '../language/language.entity';
import { UserAdministrator } from '../user_administrator/user_administrator.entity';
import { BankAccount } from '../bank_account/bank_account.entity';
import { Country } from '../country/country.entity';

@Entity()
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_user_details: number;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  second_last_name: string;

  @Column({ nullable: true })
  birthdate: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  /*FOTO DE QUE TIPO ES */
  @Column({ nullable: true })
  photo: string;

  @OneToOne(
    type => UserClient,
    userClient => userClient.id_user_client,
    { nullable: true },
  )
  @JoinColumn({ name: 'fk_user_client' })
  userClient: UserClient;

  @OneToOne(
    type => UserAdministrator,
    userAdministrator => userAdministrator.id_user_administrator,
    { nullable: true },
  )
  @JoinColumn({ name: 'fk_user_administrator' })
  userAdministrator: UserAdministrator;

  @ManyToOne(
    type => Language,
    language => language.id_language,
    { nullable: false },
  )
  @JoinColumn({ name: 'fk_language' })
  language: Language;

  @ManyToOne(
    type => Country,
    country => country.id_country,
    { nullable: true },
  )
  @JoinColumn({ name: 'fk_country' })
  country: Country;

  @OneToMany(
    type => BankAccount,
    bankAccount => bankAccount.id_bank_account,
    { nullable: true },
  )
  bankAccount: BankAccount;
}
