export class CheckoutPage {
  readonly page: any;

  constructor(page: any) {
    this.page = page;
  }

  async enterContactInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
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
