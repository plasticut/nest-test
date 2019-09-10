import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { RendererClient } from './renderer/renderer.client';
import { RENDERER_CLIENT } from './renderer/renderer.const';

@Module({
  imports: [
    ClientsModule.register([{
      transport: Transport.RMQ,
      name: RENDERER_CLIENT,
      options: {
        urls: [
          process.env.RABBITMQ_URI || 'amqp://user:bitnami@localhost',
        ],
        queue: 'nest_test_screenshot',
        queueOptions: { durable: false },
      },
    }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
