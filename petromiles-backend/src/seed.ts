import { NestFactory } from '@nestjs/core';
import { SeederModule } from './database/seeders/seeder.module';
import { Seeder } from './database/seeders/seeder';

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule).then(appContext => {
    const seeder = appContext.get(Seeder);

    if (process.env.SEED_CLEAN === 'TRUE') {
      seeder
        .clean()
        .then(() => {
          console.log('Cleaning database complete!');
        })
        .catch(error => {
          console.log('Cleaning database error!');
          throw error;
        })
        .finally(() => appContext.close());
    } else {
      seeder
        .seed()
        .then(() => {
          console.log('Database is ready!');
        })
        .catch(error => {
          console.log('Sedding failed');
          throw error;
        })
        .finally(() => appContext.close());
    }
  });
}
bootstrap();
