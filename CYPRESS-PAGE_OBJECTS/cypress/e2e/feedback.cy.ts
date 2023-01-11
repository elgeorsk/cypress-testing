import FeedbackPage from "../page-objects/pages/FeedbackPage"

describe('E2E feedback page test scenario', { testIsolation: false }, () => {
    before(function(){
        FeedbackPage.load()
    })

    it('should load feedback form', () => {
        cy.isVisible('form')
    })

    it('should fill feedback form', () => {
        FeedbackPage.submitFeedback()
    })

    it('should display feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('#feedback-title').contains('Feedback')
        cy.contains('Thank you for your comments, MyName.')
    })

})