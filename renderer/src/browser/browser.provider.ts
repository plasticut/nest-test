import { launch } from 'puppeteer';
import { BROWSER_PROVIDER } from './browser.const';

export const BrowserProvider = {
  provide: BROWSER_PROVIDER,
  useFactory: async () => {
    const browser = await launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    return browser;
  },
};
