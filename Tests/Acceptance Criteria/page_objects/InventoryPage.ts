export class InventoryPage {
  readonly page: any;

  constructor(page: any) {
    this.page = page;
  }

  async addItemToCart(itemName: string) {
    await this.page.click(`button[data-test="add-to-cart-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`);
  }

  async getCartCount() {
    return this.page.textContent('.shopping_cart_badge');
  }

  async isInventoryListVisible() {
    return this.page.isVisible('.inventory_list');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
