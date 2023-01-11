export default class BasePage {

    static pause(ms:number) {
        cy.wait(ms)
    }

    static logInfo(message:string) {
        cy.log(message)
    }

    static setMobileViewport() {
        cy.setResolution('iphone-x')
    }

    static setTabletViewport() {
        cy.setResolution('ipad-2')
    }

    static setDesktopViewport() {
        cy.setResolution('macbook-13')
    }

    static setLargeDesktopViewport() {
        cy.setResolution([1980, 1080])
    }
}