import { Injectable, Inject } from '@nestjs/common';
import { Browser } from 'puppeteer';
import { BROWSER_PROVIDER } from './browser/browser.const';
import { ScreenshotDTO } from '../../dto/screenshot.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(BROWSER_PROVIDER) private readonly browser: Browser,
  ) {
  }

  async screenshot({ url, type }: ScreenshotDTO): Promise<Buffer> {
    const page = await this.browser.newPage();

    await page.goto(url, {
      waitUntil: 'networkidle0',
    });

    const screenshot = await page.screenshot({
      encoding: 'binary',
      type,
      fullPage: true
    });

    page.close();

    return screenshot;
  }
}
