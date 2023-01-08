describe('E2E feedback page test scenario', { testIsolation: false }, () => {
    before(function(){
        cy.visitFeedbackPage()
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('should fill feedback form', () => {
        cy.fixture('feedbackForm').then(data => {
            cy.submitFeedback(data.name, data.email, data.subject, data.comment)
        })

    })

    it('should display feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('#feedback-title').contains('Feedback')
    })

})