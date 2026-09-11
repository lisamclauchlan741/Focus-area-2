export class InventoryPage {
  readonly page: any;
  readonly addToCartButton = (itemName: string) =>
    `button[data-test="add-to-cart-${itemName.toLowerCase().replace(/\s+/g, '-')}"]`;
  readonly cartBadge = '.shopping_cart_badge';
  readonly cartLink = '.shopping_cart_link';
  readonly inventoryList = '[data-test="inventory-list"]';

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
    await this.page.locator(this.inventoryList).waitFor({ state: 'visible' });
    return true;
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}
