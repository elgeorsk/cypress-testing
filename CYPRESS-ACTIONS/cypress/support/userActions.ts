declare namespace Cypress {
    interface Chainable {

        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})