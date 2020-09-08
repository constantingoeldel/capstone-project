/* eslint-disable no-undef */

describe('Project', () => {
  beforeEach(() => {
    cy.viewport(375, 667)
    cy.visit('http://localhost:3000')
  })
  it('displays the search bar', () => {
    cy.get('input')
  })
  it('gives correct result', () => {
    cy.get('input').type('LIB')
    cy.get('#root > :nth-child(4)').should('contain', 'LIB')
  })
  it('clears input', () => {
    cy.get('input').type('smth').should('have.value', 'smth')
    cy.get('button').click()
    cy.get('input').should('have.value', '')
  })
  it.only('filters and search work together', () => {
    cy.get('input').type('smth')
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(4)').click()
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(10)').click()
    cy.get('.Project__Card-nm2m85-0').should('have.length', 3)
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
  it('shows all tags', () => {
    cy.get('.TagCluster__TagList-x84l3-0 > li').should('have.length', 12)
  })
  it('shows tags on card', () => {
    cy.get('.Project__Card-nm2m85-0 > ul > li').should('be.visible').and('have.length.above', 200)
  })
  it('Tag is clickable & correct color', () => {
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(1)')
      .click()
      .should('have.css', 'background-color', 'rgb(27, 153, 139)')
  })
  it('Displays less projects after filter', () => {
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(1)').click()
    cy.get('.Project__Card-nm2m85-0').should('have.length.below', 100)
  })
  it('sorts correctly', () => {
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(2)').click()
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(4)').click()
    cy.get('.TagCluster__TagList-x84l3-0 > :nth-child(10)').click()
    cy.get('#root > :nth-child(4)').should('contain', 'RU | Confess')
  })
})
