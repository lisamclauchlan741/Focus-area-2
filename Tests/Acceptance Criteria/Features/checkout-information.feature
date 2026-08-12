Feature: Checkout information
  As a user
  I want to provide my shipping information
  So that I can continue to checkout

  Scenario: Continuing checkout with valid shipping information
    Given I am on the "Checkout: Your Information" page
    When I enter valid shipping information with first name "Jane", last name "Doe", and postal code "12345"
    And I click the "Continue" button
    Then I should be navigated to the "Checkout: Overview" page "https://www.saucedemo.com/checkout-step-two.html"
