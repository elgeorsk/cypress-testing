Feature: duckduckgo.com

Rule: number1

  Background:
    Given I visit duckduckgo.com
    And wait 5 secs

  Scenario: visiting the frontpage
    Then I should see a search bar


  Scenario: visiting the frontpage2
    Then I should see a search bar2

Rule: number2

  Background:
    Given wait 5 secs
    And I visit duckduckgo.com

  Scenario: visiting the frontpage
    Then I should see a search bar


  Scenario: visiting the frontpage2
    Then I should see a search bar2

  