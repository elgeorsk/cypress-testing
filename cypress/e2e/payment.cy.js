describe('E2E Payment test scenario', { testIsolation: false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

    it('should send new payment', () => {
        cy.get('#pay_bills_tab').click()

        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select(4) // Credit Card
        cy.get('#sp_amount').type('1000')

        cy.get('#sp_date').type(cy.dateFormat(new Date()) + '{enter}')

        cy.get('#sp_description').type('New payment description')

        cy.get('#pay_saved_payees').click()
    })

    it('should send success message', () => {
        cy.url().should('include','pay-bills-saved-payee.html')
        cy.get('#alert_content').should('be.visible').and('contain','The payment was successfully submitted.')
    })

    it('should logout from application', () => {
        cy.logout()
        cy.url().should('include', 'index.html')
    })
})