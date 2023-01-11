/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable {

        login(username:string, password:string): Chainable<Element>

        isVisible(selector:string): Chainable<Element>
        isHidden(selector:string): Chainable<Element>
        setResolution(size:any): Chainable<Element>
        
    }
}

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setResolution', size => {
    if(Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})

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