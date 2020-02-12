Feature: As a user, I want to login

  Scenario: 1. Non-existing User - Not Authorized
    Given a non-logged in user is on the sign in page
    When invalid credentials are provided
    Then the login was unsuccessful


