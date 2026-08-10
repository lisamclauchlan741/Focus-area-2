import { test, expect } from '@playwright/test';

test('finishing checkout shows the confirmation page', async ({ page }) => {
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

  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Jane');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  await page.locator('[data-test="finish"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
});
