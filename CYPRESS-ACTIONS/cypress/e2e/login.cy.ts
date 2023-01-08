describe('Demo Test', () => {
    it('should login sucessfully at the application', () => {
        cy.visitLoginPage()
        cy.waitForSeconds(5) // will wait for 5 secs before login
        cy.fixture('loginData').then(data => {
            cy.login(data.username, data.password)
        })
    })
})