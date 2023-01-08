describe('Demo Test', () => {
    it('should login sucessfully at the application', () => {
        cy.visitLoginPage()
        cy.fixture('loginData').then(data => {
            cy.login(data.username, data.password)
        })
    })
})