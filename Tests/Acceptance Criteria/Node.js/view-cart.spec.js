const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { InventoryPage } = require('../page_objects/InventoryPage');
const { CartPage } = require('../page_objects/CartPage');

test('Scenario: Viewing the cart shows the selected item', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.waitForInventoryPage();

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await expect(await inventoryPage.getCartCount()).toBe('1');

  await inventoryPage.openCart();
  await expect(page).toHaveURL(/\/cart\.html$/);

  await expect(await cartPage.isItemVisible()).toBe(true);
});
