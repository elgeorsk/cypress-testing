describe('Searchbox test', { testIsolation: false }, () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into searchbox and sumbit with pressing \'Enter\' key', () =>{
        cy.get('#searchTerm').type('some text {enter}')
    })

    it('shoud show search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})