const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { InventoryPage } = require('../page_objects/InventoryPage');

test('Scenario: Adding an item from the product catalog updates the cart count', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.waitForInventoryPage();

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await expect(await inventoryPage.getCartCount()).toBe('1');
});
