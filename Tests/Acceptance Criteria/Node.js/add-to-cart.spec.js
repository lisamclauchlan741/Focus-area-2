const { test, expect } = require('@playwright/test');

/*
Feature: Add item to cart
  Scenario: Adding an item from the product catalog updates the cart count
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    When I select the "Sauce Labs Backpack" item
    And I click the Add to cart button
    Then the cart count should be 1
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

async function whenISelectTheItem(page, itemName) {
  await page.locator(`text=${itemName}`).click();
}

async function andIClickTheAddToCartButton(page) {
  await page.locator('button', { hasText: 'Add to cart' }).first().click();
}

async function thenTheCartCountShouldBe(page, count) {
  await expect(page.locator('.shopping_cart_badge')).toHaveText(String(count));
}

test('Scenario: Adding an item from the product catalog updates the cart count', async ({ page }) => {
  await givenIAmOnTheSauceDemoLoginPage(page);
  await whenIEnterTheUsername(page, 'standard_user');
  await andIEnterThePassword(page, 'secret_sauce');
  await andIClickTheLoginButton(page);
  await thenIShouldBeRedirectedToTheInventoryPage(page);
  await whenISelectTheItem(page, 'Sauce Labs Backpack');
  await andIClickTheAddToCartButton(page);
  await thenTheCartCountShouldBe(page, 1);
});
