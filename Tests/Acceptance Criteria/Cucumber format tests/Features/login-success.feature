Feature: User login
  As a user
  I want to log in to SauceDemo
  So that I can view the product catalog

  Scenario: Successful login displays the product catalog
    Given I am on the SauceDemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page
    And I should see the product listings
