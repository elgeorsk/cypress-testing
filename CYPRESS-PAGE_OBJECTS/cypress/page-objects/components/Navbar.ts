export default class Navbar {
    static clickOnLogo(){
        cy.get('.brand').click()
    }

    static search(text:string){
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static displaySignInBtn(){
        cy.isVisible('#signin_button')
    }

    static clickSettings(){
        cy.contains('Settings').click()
    }

    static logout(){
        cy.get('.icon-user').click()
        cy.get('#logout_link').click() 
    }

}