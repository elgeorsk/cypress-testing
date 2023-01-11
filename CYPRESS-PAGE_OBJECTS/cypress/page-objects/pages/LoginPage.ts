import BasePage from "../BasePage"

export default class LoginPage extends BasePage {
    
    static load(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    }

    static login(username:string, password:string) {
        cy.login(username,password)
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot you password ?').click()
    }

    static displayErrorMessage() {
        cy.isVisible('.alert-error')
    }
}