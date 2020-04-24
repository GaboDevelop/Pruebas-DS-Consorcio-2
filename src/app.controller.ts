import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('email')
export class AppController {
  constructor(private readonly emailService: EmailService) {}
  @Get()
  sendMail(): any {
    return this.emailService.sendMail();
  }
}
