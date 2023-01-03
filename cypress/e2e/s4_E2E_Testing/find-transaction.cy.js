describe('E2E Find transactions test scenario', { testIsolation:false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

it('should filter transaction', () => {
    cy.get('#account_activity_tab').click()
    cy.contains('Show Transactions').click() // workaround, without this line on submitting the form giving 500
    cy.contains('Find Transactions').click()

    cy.get('#aa_fromAmount').type('200')
    cy.get('#aa_toAmount').type('2000')
    cy.contains('button', 'Find').click()
})

it('should display results', () => {
    cy.get('#filtered_transactions_for_account').should('be.visible')
    cy.get('tbody > tr').its('length').should('be.gt', 0)
})

it('should logout from application', () => {
    cy.logout()
    cy.url().should('include', 'index.html')
})

})