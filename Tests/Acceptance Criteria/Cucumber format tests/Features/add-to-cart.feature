Feature: Add item to cart
  As a user
  I want to add an item to my shopping cart
  So that I can purchase it later

  Scenario: Adding an item from the product catalog updates the cart count
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    When I add "Sauce Labs Backpack" to the cart
    Then the shopping cart badge should show "1"
