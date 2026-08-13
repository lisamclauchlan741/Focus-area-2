Feature: Add item to cart
  As a user
  I want to add an item to my shopping cart
  So that I can purchase it later

  Scenario: Adding an item from the product catalog
    Given I am on the product catalog page "https://www.saucedemo.com/inventory.html"
    When I click the "Add to cart" button for the item "Sauce Labs Backpack"
    Then the item should be added to my shopping cart
    And the shopping cart icon should show a count of 1
