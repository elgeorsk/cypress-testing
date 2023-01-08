declare namespace Cypress {
    interface Chainable {

        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>

        /**
         * 
         * @param name - takes name of the message author
         * @param email - takes user's email (there is no validation at the backend)
         * @param subject - takes feedback subject
         * @param message - takes feedback message
         */
        submitFeedback(
            name: string,
            email: string,
            subject: string,
            comment: string
        ): Chainable<Element>
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})

Cypress.Commands.add('submitFeedback', (name,email,subject, comment) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comment)
    cy.contains('Send Message').click()
})