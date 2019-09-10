import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ScreenshotDTO } from '../../dto/screenshot.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({
    cmd: 'screenshot',
  })
  async screenshot(
    params: ScreenshotDTO,
  ): Promise<Buffer> {
    return await this.appService.screenshot(params);
  }
}
