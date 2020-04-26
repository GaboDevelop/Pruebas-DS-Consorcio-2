import { Module,HttpModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
/*import { CompaniesModule } from './companies/companies.module';
import { MensajeController } from './mensaje/mensaje.controller';
import { MensajeService } from './mensaje/mensaje.service';
import { MensajeModule } from './mensaje/mensaje.module';
*/
import { DocumentoController } from './documento/documento.controller';
import { DocumentoService } from './documento/documento.service';
import { DocumentoModule } from './documento/documento.module';


@Module({
	/*imports: [ TypeOrmModule.forRoot(config), CompaniesModule, MensajeModule,HttpModule, DocumentoModule],
	controllers: [ AppController, MensajeController, DocumentoController ],
	providers: [ AppService, MensajeService, DocumentoService ]*/

	imports: [ DocumentoModule],
	controllers: [ AppController, DocumentoController ],
	providers: [ AppService, DocumentoService ]

})
export class AppModule {}