export default class TabAccountLinks {
    static clickSummary(){
        cy.get('#account_summary_tab').click()
    }

    static clickActivity(){
        cy.get('#account_activity_tab').click()
    }

    static clickTranferFunds(){
        cy.get('#transfer_funds_tab').click()
    }

    static clickPayBills(){
        cy.get('#pay_bills_tab').click()
    }

    static clickMyMoneyMap(){
        cy.get('#money_map_tab').click()
    }

    static clickOnlineStatements(){
        cy.get('#online_statements_tab').click()
    }
}