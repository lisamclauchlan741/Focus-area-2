export class LoginPage {
  readonly page: any;
  readonly loginUrl = 'https://www.saucedemo.com/';
  readonly usernameInput = '[data-test="username"]';
  readonly passwordInput = '[data-test="password"]';
  readonly loginButton = '[data-test="login-button"]';
  readonly inventoryUrl = /\/inventory\.html$/;

  constructor(page: any) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.loginUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async waitForInventoryPage() {
    await this.page.waitForURL(this.inventoryUrl);
  }
}
