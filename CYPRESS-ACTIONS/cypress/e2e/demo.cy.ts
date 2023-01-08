describe('Demo Test', () => {
    it('should login sucessfully at the application', () => {
        cy.visitLoginPage()
        cy.login('username', 'password')
    })
})