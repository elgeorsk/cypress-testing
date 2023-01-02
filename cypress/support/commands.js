// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//login function
Cypress.Commands.add('login', (username, password) => {

    cy.get('#user_login').as('username')
    cy.get('#user_password').as('password')

    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('@username').clear()
    cy.get('@username').type(username)
    cy.get('@password').clear()
    cy.get('@password').type(password)

    cy.get('input[type="checkbox"').click()
    cy.contains('Sign in').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.icon-user').click()
    cy.get('#logout_link').click()    
})