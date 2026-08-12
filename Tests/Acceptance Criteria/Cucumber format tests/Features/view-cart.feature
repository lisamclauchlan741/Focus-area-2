Feature: View cart
  As a user
  I want to view my shopping cart
  So that I can verify the items I added

  Scenario: Viewing the cart shows the selected item
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    When I add "Sauce Labs Backpack" to the cart
    Then the shopping cart badge should show "1"
    When I open the shopping cart
    Then I should be on the cart page
    And I should see the selected item in the cart
