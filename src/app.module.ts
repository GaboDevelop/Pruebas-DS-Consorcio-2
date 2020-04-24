import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: 'contraseña de sendGrid',
        },
      },
      defaults: {
        from: '"Nombre" <correo del que envian>',
      },
      template: {
        dir: __dirname + '/templates',
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [EmailService],
})
export class AppModule {}
