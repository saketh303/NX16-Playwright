import { createEnvironment } from '@ngx-playwright/harness';
import { Given, Then } from '@cucumber/cucumber';
import { firefox } from '@playwright/test'

Given('I am on the homepage', {timeout: 10000}, async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:4200');
    const harness = createEnvironment(page);
    await browser.close();
    return 0;
});