export class CartPage {
  readonly page: any;

  constructor(page: any) {
    this.page = page;
  }

  async goToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async isItemVisible() {
    return this.page.isVisible('.cart_item');
  }

  async waitForCartPage() {
    await this.page.waitForURL(/\/cart\.html$/);
  }
}
