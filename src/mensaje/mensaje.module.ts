import { Module, HttpModule } from '@nestjs/common';
import { MensajeController } from './mensaje.controller';
import { MensajeService} from './mensaje.service';


@Module({
		imports: [HttpModule],
		controllers: [MensajeController],
 	 	providers: [MensajeService]
 })
export class MensajeModule {}
