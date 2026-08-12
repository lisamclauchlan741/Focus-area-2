const { test, expect } = require('@playwright/test');

/*
Feature: User login
  Scenario: Successful login displays the product catalog
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    And I should see the product listings
*/

async function givenIAmOnTheSauceDemoLoginPage(page) {
  await page.goto('https://www.saucedemo.com/');
}

async function whenIEnterTheUsername(page, username) {
  await page.locator('[data-test="username"]').fill(username);
}

async function andIEnterThePassword(page, password) {
  await page.locator('[data-test="password"]').fill(password);
}

async function andIClickTheLoginButton(page) {
  await page.locator('[data-test="login-button"]').click();
}

async function thenIShouldBeRedirectedToTheInventoryPage(page) {
  await expect(page).toHaveURL(/\/inventory\.html$/);
}

async function andIShouldSeeTheProductListings(page) {
  await expect(page.locator('.inventory_list')).toBeVisible();
}

test('Scenario: Successful login displays the product catalog', async ({ page }) => {
  await givenIAmOnTheSauceDemoLoginPage(page);
  await whenIEnterTheUsername(page, 'standard_user');
  await andIEnterThePassword(page, 'secret_sauce');
  await andIClickTheLoginButton(page);
  await thenIShouldBeRedirectedToTheInventoryPage(page);
  await andIShouldSeeTheProductListings(page);
});
