describe('E2E Tranfer Funds test scenario', { testIsolation:false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

    it('should fill tranfer funds form', () => {
        
    })

    it('should verify correct data', () => {
        
    })
})