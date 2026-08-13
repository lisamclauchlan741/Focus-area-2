Feature: Checkout information
  As a user
  I want to provide checkout details
  So that I can continue to the order summary page

  Scenario: Entering valid checkout information navigates to the overview page
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    When I add "Sauce Labs Backpack" to the cart
    Then the shopping cart badge should show "1"
    When I open the shopping cart
    Then I should be on the cart page
    When I click the Checkout button
    And I enter the first name "Jane"
    And I enter the last name "Doe"
    And I enter the postal code "12345"
    And I click Continue
    Then I should be on the checkout overview page
