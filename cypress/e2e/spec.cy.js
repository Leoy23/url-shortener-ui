describe('Page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      ok: true,
      fixture: 'sampleData.json'
    })
    cy.visit('http://localhost:3000')
  })
  it('should display title and existing shortened urls', () => {
    cy.get('h1').should('exist').should('contain', 'URL Shortener')
    
  })
  // cy.get('[placeholder="Title..."]').should('exist')
  // cy.get('[placeholder="URL to Shorten..."]').should('exist')
  // cy.get('button').should('exist')
})