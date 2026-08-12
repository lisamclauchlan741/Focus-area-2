const { test, expect } = require('@playwright/test');

/*
Feature: View cart
  Scenario: Viewing the cart shows the selected item
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    When I select the "Sauce Labs Backpack" item
    And I click the Add to cart button
    Then the cart count should be 1
    When I open the shopping cart
    Then I should be on the cart page
    And I should see the selected item in the cart
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

async function whenIOpenTheShoppingCart(page) {
  await page.locator('.shopping_cart_link').click();
}

async function thenIShouldBeOnTheCartPage(page) {
  await expect(page).toHaveURL(/\/cart\.html$/);
}

async function andIShouldSeeTheSelectedItemInTheCart(page) {
  await expect(page.locator('.cart_item')).toBeVisible();
}

test('Scenario: Viewing the cart shows the selected item', async ({ page }) => {
  await givenIAmOnTheSauceDemoLoginPage(page);
  await whenIEnterTheUsername(page, 'standard_user');
  await andIEnterThePassword(page, 'secret_sauce');
  await andIClickTheLoginButton(page);
  await thenIShouldBeRedirectedToTheInventoryPage(page);
  await whenISelectTheItem(page, 'Sauce Labs Backpack');
  await andIClickTheAddToCartButton(page);
  await thenTheCartCountShouldBe(page, 1);
  await whenIOpenTheShoppingCart(page);
  await thenIShouldBeOnTheCartPage(page);
  await andIShouldSeeTheSelectedItemInTheCart(page);
});
