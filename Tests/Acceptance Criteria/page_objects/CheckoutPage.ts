export class CheckoutPage {
  readonly page: any;
  readonly firstNameInput = '[data-test="firstName"]';
  readonly lastNameInput = '[data-test="lastName"]';
  readonly postalCodeInput = '[data-test="postalCode"]';
  readonly continueButton = '[data-test="continue"]';
  readonly finishButton = '[data-test="finish"]';
  readonly overviewUrl = /\/checkout-step-two\.html$/;
  readonly completeUrl = /\/checkout-complete\.html$/;
  readonly confirmationMessage = '.complete-header';

  constructor(page: any) {
    this.page = page;
  }

  async enterContactInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continue() {
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }

  async waitForOverviewPage() {
    await this.page.waitForURL(this.overviewUrl);
  }

  async waitForCompletePage() {
    await this.page.waitForURL(this.completeUrl);
  }

  async getConfirmationMessage() {
    return this.page.textContent(this.confirmationMessage);
  }
}
