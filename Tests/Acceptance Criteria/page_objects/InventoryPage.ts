export class InventoryPage {
  readonly page: any;
  readonly addToCartButton = (itemName: string) =>
    `button[data-test="add-to-cart-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`;
  readonly cartBadge = '.shopping_cart_badge';
  readonly cartLink = '.shopping_cart_link';
  readonly inventoryList = '.inventory_list';

  constructor(page: any) {
    this.page = page;
  }

  async addItemToCart(itemName: string) {
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
