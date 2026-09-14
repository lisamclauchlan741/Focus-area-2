export class CartPage {
  readonly page: any;
  readonly checkoutButton = '[data-test="checkout"]';
  readonly cartItem = '[data-test="cart-list"] [data-test="inventory-item"]';
  readonly cartUrl = /\/cart\.html$/;

  constructor(page: any) {
    this.page = page;
  }

  async goToCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async isItemVisible() {
    await this.page.locator(this.cartItem).waitFor({ state: 'visible' });
    return true;
  }

  async waitForCartPage() {
    await this.page.waitForURL(this.cartUrl);
  }
}
