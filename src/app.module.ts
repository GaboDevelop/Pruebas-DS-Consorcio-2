import { Module,HttpModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { config } from './orm.config';
//import { CompaniesModule } from './companies/companies.module';
import { MensajeController } from './mensaje/mensaje.controller';
import { MensajeService } from './mensaje/mensaje.service';
import { MensajeModule } from './mensaje/mensaje.module';


@Module({
	//imports: [ TypeOrmModule.forRoot(config), CompaniesModule, MensajeModule,HttpModule],

	imports : [ MensajeModule,HttpModule],
	controllers: [ AppController, MensajeController ],
	providers: [ AppService, MensajeService ]
})
export class AppModule {}