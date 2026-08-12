const { test, expect } = require('@playwright/test');

/*
Feature: Checkout complete
  Scenario: Finishing checkout shows the confirmation page
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
    When I click the Checkout button
    And I enter the first name "Jane"
    And I enter the last name "Doe"
    And I enter the postal code "12345"
    And I click Continue
    Then I should be on the checkout overview page
    When I click the Finish button
    Then I should be on the checkout complete page
    And I should see the order confirmation message
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

async function whenIClickTheCheckoutButton(page) {
  await page.locator('[data-test="checkout"]').click();
}

async function andIEnterTheFirstName(page, firstName) {
  await page.locator('[data-test="firstName"]').fill(firstName);
}

async function andIEnterTheLastName(page, lastName) {
  await page.locator('[data-test="lastName"]').fill(lastName);
}

async function andIEnterThePostalCode(page, postalCode) {
  await page.locator('[data-test="postalCode"]').fill(postalCode);
}

async function andIClickContinue(page) {
  await page.locator('[data-test="continue"]').click();
}

async function thenIShouldBeOnTheCheckoutOverviewPage(page) {
  await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
}

async function whenIClickTheFinishButton(page) {
  await page.locator('[data-test="finish"]').click();
}

async function thenIShouldBeOnTheCheckoutCompletePage(page) {
  await expect(page).toHaveURL(/\/checkout-complete\.html$/);
}

async function andIShouldSeeTheOrderConfirmationMessage(page) {
  await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
}

test('Scenario: Finishing checkout shows the confirmation page', async ({ page }) => {
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
  await whenIClickTheCheckoutButton(page);
  await andIEnterTheFirstName(page, 'Jane');
  await andIEnterTheLastName(page, 'Doe');
  await andIEnterThePostalCode(page, '12345');
  await andIClickContinue(page);
  await thenIShouldBeOnTheCheckoutOverviewPage(page);
  await whenIClickTheFinishButton(page);
  await thenIShouldBeOnTheCheckoutCompletePage(page);
  await andIShouldSeeTheOrderConfirmationMessage(page);
});
