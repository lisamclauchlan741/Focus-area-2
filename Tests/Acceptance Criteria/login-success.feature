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

  @playwright
  Scenario Outline: Playwright login flow
    Given I open the SauceDemo login page
    When I fill in the username with "<username>"
    And I fill in the password with "<password>"
    And I click the Login button
    Then the URL should contain "/inventory.html"
    And the product inventory container should be visible

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
