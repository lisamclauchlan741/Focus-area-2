const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { InventoryPage } = require('../page_objects/InventoryPage');
const { CartPage } = require('../page_objects/CartPage');
const { CheckoutPage } = require('../page_objects/CheckoutPage');

test('Scenario: Finishing checkout shows the confirmation page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.waitForInventoryPage();

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await expect(await inventoryPage.getCartCount()).toBe('1');

  await inventoryPage.openCart();
  await expect(page).toHaveURL(/\/cart\.html$/);

  await cartPage.goToCheckout();
  await checkoutPage.enterFirstName('Jane');
  await checkoutPage.enterLastName('Doe');
  await checkoutPage.enterPostalCode('12345');
  await checkoutPage.continue();

  await checkoutPage.waitForOverviewPage();
  await checkoutPage.finish();
  await checkoutPage.waitForCompletePage();

  await expect(await checkoutPage.getConfirmationMessage()).toContain('Thank you for your order!');
});
