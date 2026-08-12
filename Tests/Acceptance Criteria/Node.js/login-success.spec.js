const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { InventoryPage } = require('../page_objects/InventoryPage');

test('Scenario: Successful login displays the product catalog', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.waitForInventoryPage();

  await expect(await inventoryPage.isInventoryListVisible()).toBe(true);
});
