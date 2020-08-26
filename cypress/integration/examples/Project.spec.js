describe('Project View', () => {
  it('Displays the headlines correctly', () => {
    cy.visit('http://localhost:3000')
    cy.contains('ZeroClimate')
    cy.contains('Take a breather')
    cy.contains('Never Refuse Refuge')
  })
  it('Displays the countries correctly', () => {
    cy.visit('http://localhost:3000')
    cy.contains('AUS')
    cy.contains('SWE')
    cy.contains('LIB')
  })
  it('Displays the description correctly', () => {
    cy.visit('http://localhost:3000')
    cy.contains(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras euismod semper turpis, at luctus elit dignissim non. Curabitur id arcu in justo pellentesque.'
    )
    cy.contains('Lorem ipsum doloruelit dignissim non. Curabitur id arcu in justo pellentesque.')
    cy.contains(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras turpis, at luctus elit'
    )
  })
})
