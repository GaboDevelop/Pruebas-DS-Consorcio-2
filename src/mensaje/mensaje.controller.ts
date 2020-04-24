import { Controller, Get, Param, Post, Body, Query, Delete, HttpService } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { messageDto } from '../mensaje/message.dto';
import { map } from 'rxjs/operators';

@Controller('Pruebamensaje') export class MensajeController {
	constructor(private menser: MensajeService){}

	@Post() 
	async CrearMensaje(){
            const men= await this.menser.CrearMensaje();
            return men;
	} 
}

