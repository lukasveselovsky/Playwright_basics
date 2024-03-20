import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByText('Buttons').click();
  await page.getByRole('button', { name: 'Double Click Me' }).click();
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
});