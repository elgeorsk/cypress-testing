describe('E2E login and logout flow test scenario', { testIsolation: false }, () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid data', () => {
        cy.url().should('include', 'login.html')

        cy.login('invalid username', 'invalide password')
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

    it('should login to application', () => {
        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

    it('should logout from application', () => {
        cy.get('.icon-user').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })
})