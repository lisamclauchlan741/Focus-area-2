class CartPage {
  constructor(page) {
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

module.exports = { CartPage };
