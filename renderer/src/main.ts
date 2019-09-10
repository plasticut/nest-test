import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('nest-test-app');

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        process.env.RABBITMQ_URI || 'amqp://localhost'
      ],
      queue: 'nest_test_screenshot',
      queueOptions: { durable: false },
    },
  });

  await app.listenAsync();

  logger.log(`Renderer service started`);
}
bootstrap();
