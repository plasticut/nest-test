import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ScreenshotDTO } from '../../dto/screenshot.dto';
import { bufferToStream } from './utils';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('screenshot')
  async getScreenshot(@Query() query: ScreenshotDTO, @Res() response: Response): Promise<void> {
    const screenshot = await this.appService.getScreenshot(query);

    response.set('cache-control', 'none');
    // response.set('content-disposition', `attachment; filename=screenshot.${query.type}`);
    response.type(query.type);

    bufferToStream(screenshot).pipe(response);
  }
}
