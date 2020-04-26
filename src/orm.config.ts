import { TypeOrmModuleOptions } from '@nestjs/TypeORM';
export const config: TypeOrmModuleOptions = {
	type:'postgres',
	username:'angel',
	password:'123',
	port: 5432,
	host:'127.0.0.1',
	database:'ejemplo_nest',
	synchronize: true,
	entities:["dist/**/*.entity{.ts,.js}"] ,
};