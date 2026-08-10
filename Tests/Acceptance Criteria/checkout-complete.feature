Feature: Checkout complete
  As a user
  I want to complete my purchase
  So that I can confirm my order

  Scenario: Finishing checkout shows a confirmation page
    Given I am on the "Checkout: Overview" page
    When I review the order summary including items, payment information, and shipping information
    And I click the "Finish" button
    Then I should be navigated to the "Checkout: Complete!" page "https://www.saucedemo.com/checkout-complete.html"
    And I should see a confirmation message "Thank you for your order!"
