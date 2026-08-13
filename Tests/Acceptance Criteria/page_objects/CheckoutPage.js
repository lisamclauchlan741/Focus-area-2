class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async goToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async enterFirstName(firstName) {
    await this.page.fill('[data-test="firstName"]', firstName);
  }

  async enterLastName(lastName) {
    await this.page.fill('[data-test="lastName"]', lastName);
  }

  async enterPostalCode(postalCode) {
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  async continue() {
    await this.page.click('[data-test="continue"]');
  }

  async finish() {
    await this.page.click('[data-test="finish"]');
  }

  async waitForOverviewPage() {
    await this.page.waitForURL(/\/checkout-step-two\.html$/);
  }

  async waitForCompletePage() {
    await this.page.waitForURL(/\/checkout-complete\.html$/);
  }

  async getConfirmationMessage() {
    return this.page.textContent('.complete-header');
  }
}

module.exports = { CheckoutPage };
