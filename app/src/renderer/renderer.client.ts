import { RENDERER_CLIENT } from './renderer.const';
import { ClientProviderOptions } from '@nestjs/microservices/module/interfaces/clients-module.interface';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
// import { Transport } from '@nestjs/common/enums/transport.enum';

export const RendererClient: ClientProviderOptions = {
  transport: Transport,
  name: RENDERER_CLIENT,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'nest_test_screenshot',
  },
};
