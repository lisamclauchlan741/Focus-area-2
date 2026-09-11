const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');
const { LoginPage } = require('../../page_objects/LoginPage');
const { InventoryPage } = require('../../page_objects/InventoryPage');

const standardUsername = 'standard_user';
const secretPassword = 'secret_sauce';
let browser;

Before(async function () {
  browser = await chromium.launch();
  const context = await browser.newContext();
  this.page = await context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given('I am on the SauceDemo login page', async function () {
  await this.loginPage.goto();
});

When('I enter the username {standard_user}', async function (username = standardUsername) {
  await this.loginPage.enterUsername(username);
});

When('I enter the password {secret_sauce}', async function (password = secretPassword) {
  await this.loginPage.enterPassword(password);
});

When('I click the Login button', async function () {
  await this.loginPage.clickLoginButton();
});

Then('I should be redirected to the inventory page', async function () {
  await this.loginPage.waitForInventoryPage();
});

Then('I should see the product listings', async function () {
  const isVisible = await this.inventoryPage.isInventoryListVisible();
  assert.ok(isVisible, 'Expected product listings to be visible');
});
