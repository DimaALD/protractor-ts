@login
Feature: Login Scenario

  Scenario: Log in to system
    When I open login page
    And  I fill login form with username: standard_user and password: secret_sauce
    Then I am on Home page
