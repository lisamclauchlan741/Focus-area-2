import { test, expect } from '@playwright/test';

test('viewing the cart shows the selected item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.locator('text=Sauce Labs Backpack').click();
  await page.locator('button', { hasText: 'Add to cart' }).first().click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await expect(page.locator('.cart_item')).toBeVisible();
});
