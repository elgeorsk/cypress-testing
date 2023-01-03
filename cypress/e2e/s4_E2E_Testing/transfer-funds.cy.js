describe('E2E Tranfer Funds test scenario', { testIsolation:false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

        cy.fixture('user').then(data => {
            cy.login(data.username, data.password)
        })
        cy.url().should('include', 'account-summary.html')
    })

    it('should fill tranfer funds form', () => {
        cy.contains('Transfer Funds').click()
        cy.get('#tf_fromAccountId').select(3)
        cy.get('#tf_fromAccountId').should('have.value', 4) // Loan(Avail. balance = $ 780)
        cy.get('#tf_toAccountId').select(1)
        cy.get('#tf_toAccountId').should('have.value', 2) // Checking(Avail. balance = $ -500.2)
        cy.get('#tf_amount').type('1000')
        cy.get('#tf_description').type('tranfer fund description')

        cy.get('#btn_submit').click()
    })

    it('should verify correct data', () => {
        cy.url().should('include', 'transfer-funds-verify.html')

        cy.get('#tf_fromAccountId').should('have.value', 'Loan')
        cy.get('#tf_toAccountId').should('have.value', 'Checking')
        cy.get('#tf_amount').should('have.value','1000')
        cy.get('#tf_description').should('have.value', 'tranfer fund description')

        cy.get('#btn_submit').click()
    })

    it('should confirm the transfer of funds', () => {
        cy.url().should('include', 'transfer-funds-confirm.html')

        cy.get('.alert-success').should('be.visible').and('contain', 'You successfully submitted your transaction')
        cy.xpath('//div[@class="board-content"]//div[@class="span3"]').should('have.length', 3)
        cy.xpath('(//div[@class="board-content"]//div[@class="span3"])').should($element => {
            expect($element[0].outerText).to.contain('Loan')
        })

        cy.xpath('(//div[@class="board-content"]//div[@class="span3"])').should($element => {
            expect($element[1].outerText).to.contain('Checking')
        })
        
        cy.xpath('(//div[@class="board-content"]//div[@class="span3"])').should($element => {
            expect($element[2].outerText).to.contain('1000')
        })
    })

    it('should logout from application', () => {
        cy.logout()
        cy.url().should('include', 'index.html')
    })
})