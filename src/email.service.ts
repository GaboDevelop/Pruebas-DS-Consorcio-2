import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail() {
    await this.mailerService
      .sendMail({
        to: 'example@hotmail.com',
        from: 'example@est.ucab.edu.ve',
        subject: 'Welcome to PetroMiles',
        text: 'Welcome', // plaintext body
        html: '<b>Welcome to PetroMiles</b>', // HTML body content
      })
      .then(success => {
        console.log(success);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
