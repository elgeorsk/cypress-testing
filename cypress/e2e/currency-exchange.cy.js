describe('E2E Currency exchange test scenario', { testIsolation:false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

    it('should fill conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()

        cy.get('#pc_currency').select(6) // Euro
        cy.get('#pc_currency').should('have.value', 'EUR')
        cy.get('#pc_amount').type('100')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('should display conversion ammount', () => {
        cy.get('#pc_conversion_amount').should('contain', 'euro (EUR) =')
    })

    it('should logout from application', () => {
        cy.logout()
        cy.url().should('include', 'index.html')
    })
})