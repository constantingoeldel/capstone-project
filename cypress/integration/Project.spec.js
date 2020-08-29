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
  it('shows the pictures', () => {
    cy.get('.Project__Img-nm2m85-1').should('be.visible')
  })
  it('renders enough projects', () => {
    cy.get('.Project__Card-nm2m85-0').should('have.length.above', 10)
  })
})
