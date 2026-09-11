class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = itemName => `button[data-test="add-to-cart-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`;
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.inventoryList = '.inventory_list';
  }

  async addItemToCart(itemName) {
    await this.page.click(this.addToCartButton(itemName));
  }

  async getCartCount() {
    return this.page.textContent(this.cartBadge);
  }

  async isInventoryListVisible() {
    return this.page.isVisible(this.inventoryList);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { InventoryPage };
