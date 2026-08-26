const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { InventoryPage } = require('../../page_objects/InventoryPage');

When('I add {Sauce Labs Backpack} to the cart', async function (itemName) {
  if (!this.inventoryPage) {
    this.inventoryPage = new InventoryPage(this.page);
  }
  await this.inventoryPage.addItemToCart(itemName);
});

Then('the shopping cart badge should show {Sauce Labs Backpack}', async function (count) {
  if (!this.inventoryPage) {
    this.inventoryPage = new InventoryPage(this.page);
  }
  const badge = await this.inventoryPage.getCartCount();
  assert.strictEqual(badge, count);
});
