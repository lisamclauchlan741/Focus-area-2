class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = itemName => `button[data-test="add-to-cart-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`;
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.inventoryList = '[data-test="inventory-list"]';
  }

  async addItemToCart(itemName) {
    await this.page.click(this.addToCartButton(itemName));
  }

  async getCartCount() {
    return this.page.textContent(this.cartBadge);
  }

  async isInventoryListVisible() {
    await this.page.locator(this.inventoryList).waitFor({ state: 'visible' });
    return true;
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { InventoryPage };
