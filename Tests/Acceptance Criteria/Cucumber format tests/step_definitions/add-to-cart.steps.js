const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { InventoryPage } = require('../../page_objects/InventoryPage');

const itemName = 'Sauce Labs Backpack';
const expectedCartCount = '1';

When(`I add "Sauce Labs Backpack" to the cart`, async function () {
  if (!this.inventoryPage) {
    this.inventoryPage = new InventoryPage(this.page);
  }
  await this.inventoryPage.addItemToCart(itemName);
});

Then(`the shopping cart badge should show "1"`, async function () {
  if (!this.inventoryPage) {
    this.inventoryPage = new InventoryPage(this.page);
  }
  const badge = await this.inventoryPage.getCartCount();
  assert.strictEqual(badge, expectedCartCount);
});
