class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '[data-test="checkout"]';
    this.cartItem = '[data-test="cart-list"] [data-test="inventory-item"]';
    this.cartUrl = /\/cart\.html$/;
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

module.exports = { CartPage };
