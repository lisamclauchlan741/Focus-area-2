const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { InventoryPage } = require('../../page_objects/InventoryPage');
const { CartPage } = require('../../page_objects/CartPage');

const selectedItemMessage = 'Expected selected item to be visible in the cart';

When('I open the shopping cart', async function () {
  if (!this.inventoryPage) {
    this.inventoryPage = new InventoryPage(this.page);
  }
  await this.inventoryPage.openCart();
});

Then('I should be on the cart page', async function () {
  if (!this.cartPage) {
    this.cartPage = new CartPage(this.page);
  }
  await this.cartPage.waitForCartPage();
});

Then('I should see the selected item in the cart', async function () {
  if (!this.cartPage) {
    this.cartPage = new CartPage(this.page);
  }
  const hasItem = await this.cartPage.isItemVisible();
  assert.ok(hasItem, selectedItemMessage);
});
