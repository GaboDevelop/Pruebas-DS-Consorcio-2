import { Controller,Get , Header, Param } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import * as fs from 'fs';

@Controller('documento')
export class DocumentoController {

  constructor(private documentoService: DocumentoService) {}


  /*@Get(':id/file')
  @Header('Content-type', 'application/pdf')
  async getDocumentFile(@Param('id') id: string): Promise<Buffer> {
    const document = await this.documentoService.byId(id)
    const pdf = await this.documentoService.getFile(document)

    // using ReadableStreamBuffer as suggested by contributor
    const stream = new ReadableStreamBuffer({
      frequency: 10,
      chunkSize: 2048,
    })
    stream.put(pdf)
    return stream
  }
}*/
	@Get('pdf')
	/*@HttpCode(HttpStatus.OK)
	@Header('Content-Type', 'application/pdf')
	@Header('Content-Disposition', 'attachment; filename=test.pdf')*/
	pdf() {
		 this.documentoService.CargarPdf();
		 return "su pdf ha sido creado y almacenaod exitosamente, revise la ruta ./src/pdf/output.pdf ";
	}	



}
