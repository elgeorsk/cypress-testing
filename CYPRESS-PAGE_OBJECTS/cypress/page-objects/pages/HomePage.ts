import BasePage from "../BasePage";

export default class HomePage extends BasePage {
    static load(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    }
}