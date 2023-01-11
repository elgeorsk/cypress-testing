import { url, login_username, login_password } from "../../config"
import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"

describe('E2E Login Failed test scenario', { testIsolation:false }, () => {
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with invalid credentials', () => {
        LoginPage.login('username', 'pass')
    })

    it('should display error message', () => {
        LoginPage.displayErrorMessage()
    })
})

describe('E2E Login Successfully test scenario', { testIsolation:false }, () => {
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with valid credentials', () => {
        LoginPage.login(login_username, login_password)
    })

    it('should logout sucessfully from the application', () => {
        Navbar.logout()
        Navbar.displaySignInBtn()
    })
})
