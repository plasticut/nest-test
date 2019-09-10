import { Injectable, Inject } from '@nestjs/common';
import { RENDERER_CLIENT } from './renderer/renderer.const';
import { ClientProxy } from '@nestjs/microservices';
import { ScreenshotDTO } from '../../dto/screenshot.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(RENDERER_CLIENT) private readonly rendererClient: ClientProxy,
  ) {}

  async getScreenshot(params: ScreenshotDTO): Promise<Buffer> {
    const pattern = {
      cmd: 'screenshot',
    };

    const { data } = await this.rendererClient
      .send(pattern, params)
      .toPromise();

    return Buffer.from(data);
  }
}
