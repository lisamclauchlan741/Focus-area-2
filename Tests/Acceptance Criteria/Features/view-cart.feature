Feature: View cart contents
  As a user
  I want to view the items in my shopping cart
  So that I can review my selection

  Scenario: Viewing the cart from the shopping cart icon
    Given I have an item in my shopping cart
    When I click the shopping cart icon
    Then I should be navigated to the "Your Cart" page "https://www.saucedemo.com/cart.html"
    And I should see the selected item listed in my cart
