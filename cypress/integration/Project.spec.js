/* eslint-disable no-undef */

describe('Project', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Displays the headlines correctly', () => {
    cy.contains('ZeroClimate')
    cy.contains('Take a breather')
    cy.contains('Never Refuse Refuge')
  })
  it('Displays the countries correctly', () => {
    cy.contains('AUS')
    cy.contains('SWE')
    cy.contains('LIB')
  })
  it('Displays the description correctly', () => {
    cy.contains(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras euismod semper turpis, at luctus elit dignissim non. Curabitur id arcu in justo pellentesque.'
    )
    cy.contains('Lorem ipsum doloruelit dignissim non. Curabitur id arcu in justo pellentesque.')
    cy.contains(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras turpis, at luctus elit'
    )
  })
  it('shows the pictures with correct height', () => {
    cy.get('img').should('have.css', 'height', '250px')
  })
  it('renders enough projects', () => {
    cy.get('.Project__Card-nm2m85-0').should('have.length.above', 100)
  })
  it('has a picture for every project', () => {
    cy.get(`img[src*="/"]`).should('have.length.above', 100)
  })
})
