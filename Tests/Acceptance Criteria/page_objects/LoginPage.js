class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginUrl = 'https://www.saucedemo.com/';
    this.usernameInput = '[data-test="username"]';
    this.passwordInput = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.inventoryUrl = /\/inventory\.html$/;
  }

  async goto() {
    await this.page.goto(this.loginUrl);
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async waitForInventoryPage() {
    await this.page.waitForURL(this.inventoryUrl);
  }
}

module.exports = { LoginPage };
