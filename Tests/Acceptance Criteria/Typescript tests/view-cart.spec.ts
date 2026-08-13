import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';
import { InventoryPage } from '../page_objects/InventoryPage';
import { CartPage } from '../page_objects/CartPage';

test('viewing the cart shows the selected item', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.waitForInventoryPage();

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await expect(await inventoryPage.getCartCount()).toBe('1');

  await inventoryPage.openCart();
  await cartPage.waitForCartPage();

  await expect(await cartPage.isItemVisible()).toBe(true);
});
