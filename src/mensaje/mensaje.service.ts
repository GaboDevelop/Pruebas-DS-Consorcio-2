import { Injectable, HttpService  } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable() export class MensajeService{
      //inicializar la variable a enviar

	constructor(private http: HttpService){}

	CrearMensaje(): Promise<Object>{
			return new Promise ( 
				resolve => {resolve(
					this.http.post('https://test_pub_fbcde5626b9c85e6b8cdde4a930682d@api.lob.com/v1/us_verifications',{
					"zip_code": "11111",
					"city":"San Francisco" ,
  					"state":"CA",
					"primary_line": "deliverable"
						}).pipe(
    						map(response => response.data),
  						))});
			}	

}
  
     
  