describe('Page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      ok: true,
      fixture: 'getSample.json'
    })
    cy.visit('http://localhost:3000')
  })
  it('should display title and existing shortened urls', () => {
    cy.get('h1').should('exist').should('contain', 'URL Shortener')
    cy.get('.url').should('exist')
    cy.get('h3').should('exist').should('contain', 'Ticket master example')
    cy.get('.short-url-link').should('exist').should('contain', 'http://localhost:3001/useshorturl/3')
    cy.get('.long-url-link').should('exist').should('contain', 'https://www.ticketmaster.com/phoenix-suns-vs-golden-state-warriors-phoenix-arizona-11-16-2022/event/19005D0B8F9F1519')
  })

  it('should display url shortener form and proper inputs', () => {
    cy.get('[placeholder="Title..."]').should('exist')
    cy.get('[placeholder="URL to Shorten..."]').should('exist')
    cy.get('button').should('exist').should('contain', 'Shorten Please!')
})
  it('should display user input correctly within the input fields', () => {
    cy.get('[placeholder="Title..."]').type('My favorite dogs')
    cy.get('[placeholder="URL to Shorten..."]').type('https://www.google.com/search?q=google+images+of+schnauzers&sxsrf=ALiCzsYcItTS_AxMVKpnvUphREik2FRG2A:1668535532095&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj42r2d47D7AhUSMjQIHf-DD5kQ_AUoAXoECAEQAw&biw=1920&bih=944&dpr=1')
  })

  it('should render new shortened URL when user submits the form', () => {
    cy.get('[placeholder="Title..."]').type('My favorite dogs')
    cy.get('[placeholder="URL to Shorten..."]').type('https://www.google.com/search?q=google+images+of+schnauzers&sxsrf=ALiCzsYcItTS_AxMVKpnvUphREik2FRG2A:1668535532095&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj42r2d47D7AhUSMjQIHf-DD5kQ_AUoAXoECAEQAw&biw=1920&bih=944&dpr=1')
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      ok: true,
      fixture: 'postSample.json'
    })
    cy.get('.submit-form-btn').click()
    cy.get('.url-container > :nth-child(2)').should('exist')
    cy.get(':nth-child(2) > h3').should('exist').should('contain', 'My favorite dogs')
    cy.get(':nth-child(2) > .short-url-link').should('exist').should('contain', 'http://localhost:3001/useshorturl/4')
    cy.get(':nth-child(2) > .long-url-link').should('exist').should('contain', 'https://www.google.com/search?q=google+images+of+schnauzers&sxsrf=ALiCzsYcItTS_AxMVKpnvUphREik2FRG2A:1668535532095&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj42r2d47D7AhUSMjQIHf-DD5kQ_AUoAXoECAEQAw&biw=1920&bih=944&dpr=1')
  })
})
 