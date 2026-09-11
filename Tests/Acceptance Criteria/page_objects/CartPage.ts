export class CartPage {
  readonly page: any;
  readonly checkoutButton = '[data-test="checkout"]';
  readonly cartItem = '.cart_item';
  readonly cartUrl = /\/cart\.html$/;

  constructor(page: any) {
    this.page = page;
  }

  async goToCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async isItemVisible() {
    return this.page.isVisible(this.cartItem);
  }

  async waitForCartPage() {
    await this.page.waitForURL(this.cartUrl);
  }
}
