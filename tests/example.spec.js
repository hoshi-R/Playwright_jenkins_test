// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://www.cman.jp/network/support/go_access.cgi');
  
  await page.screenshot({ path: 'screenshot.png' });
  await page.close();
});
