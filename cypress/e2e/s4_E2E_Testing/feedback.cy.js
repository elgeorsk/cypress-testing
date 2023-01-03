describe('E2E feedback page test scenario', { testIsolation: false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('should fill feedback form', () => {

        cy.fixture('feedbackForm').then(data => {
            cy.get('#name').type(data.name)
            cy.get('#email').type(data.email)
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.comment)
        })

    })

    it('should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should display feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('#feedback-title').contains('Feedback')
    })

})