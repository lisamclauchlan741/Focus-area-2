class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '[data-test="checkout"]';
    this.cartItem = '.cart_item';
    this.cartUrl = /\/cart\.html$/;
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

module.exports = { CartPage };
