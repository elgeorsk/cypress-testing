describe('E2E Create new payee test scenario', { testIsolation: false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
    })

    it('should login to application', () => {
        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

    it('should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()

        cy.fixture('payeeForm').then(data => {
            cy.get('#np_new_payee_name').type(data.payeeName)
            cy.get('#np_new_payee_address').type(data.payeeAddress)
            cy.get('#np_new_payee_account').type(data.payeeAccount)
            cy.get('#np_new_payee_details').type(data.payeeDetails)
        })

        cy.get('#add_new_payee').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'was successfully created.')
    })

    it('should logout from application', () => {
        cy.logout()
        cy.url().should('include', 'index.html')
    })

})