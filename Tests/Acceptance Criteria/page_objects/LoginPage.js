class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(username) {
    await this.page.fill('[data-test="username"]', username);
  }

  async enterPassword(password) {
    await this.page.fill('[data-test="password"]', password);
  }

  async clickLoginButton() {
    await this.page.click('[data-test="login-button"]');
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async waitForInventoryPage() {
    await this.page.waitForURL(/\/inventory\.html$/);
  }
}

module.exports = { LoginPage };
