import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('nest-test-app');

  const app = await NestFactory.create(AppModule);
  await app.listenAsync(3000);

  logger.log('App started at http://localhost:3000/');
}
bootstrap();
