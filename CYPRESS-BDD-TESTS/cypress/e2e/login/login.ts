import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  Given("I visit duckduckgo.com", () => {
    cy.visit("https://www.duckduckgo.com");
  })

  Given('wait 5 secs', () => {
    cy.wait(5000)
  })

  Then("I should see a search bar", () => {
    cy.get("input").should(
      "have.attr",
      "placeholder",
      "Search the web without being tracked"
    )
  })

  Then("I should see a search bar2", () => {
    cy.get("input").should(
      "have.attr",
      "placeholder",
      "Search the web without being tracked"
    )
  })