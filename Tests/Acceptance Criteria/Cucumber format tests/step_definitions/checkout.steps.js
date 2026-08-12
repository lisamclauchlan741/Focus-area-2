const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { CheckoutPage } = require('../../page_objects/CheckoutPage');

When('I click the Checkout button', async function () {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.goToCheckout();
});

When('I enter the first name {string}', async function (firstName) {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.enterFirstName(firstName);
});

When('I enter the last name {string}', async function (lastName) {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.enterLastName(lastName);
});

When('I enter the postal code {string}', async function (postalCode) {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.enterPostalCode(postalCode);
});

When('I click Continue', async function () {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.continue();
});

Then('I should be on the checkout overview page', async function () {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.waitForOverviewPage();
});

When('I click the Finish button', async function () {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.finish();
});

Then('I should be on the checkout complete page', async function () {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  await this.checkoutPage.waitForCompletePage();
});

Then('I should see the order confirmation message', async function () {
  if (!this.checkoutPage) {
    this.checkoutPage = new CheckoutPage(this.page);
  }
  const message = await this.checkoutPage.getConfirmationMessage();
  assert.strictEqual(message, 'Thank you for your order!');
});
