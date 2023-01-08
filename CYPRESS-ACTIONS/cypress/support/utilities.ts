declare namespace Cypress {
    interface Chainable {

        /**
         * 
         * @param seconds - how many seconds should the execution wait
         */
        waitForSeconds(seconds: number): Chainable<Element>
    }
}

Cypress.Commands.add('waitForSeconds', (seconds) => {
    cy.wait(seconds*1000)
})