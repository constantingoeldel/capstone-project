/* eslint-disable no-undef */

describe('Overlay', () => {
  beforeEach(() => {
    cy.viewport(375, 667)
    cy.visit('http://localhost:3000')
    cy.get('#root > :nth-child(6)').click()
  })
  it('Opens overlay when clicking on project', () => {
    cy.get('.sc-Axmtr').should('be.visible')
  })
  it('Has all necessary parts', () => {
    cy.get('.sc-Axmtr > img')
    cy.get('.sc-Axmtr > ul > li').should('have.length.above', 1)
    cy.get('.sc-Axmtr >> .sc-fzpans')
    cy.get('.sc-Axmtr >> .sc-fzplWN')
  })
  it('disappears after click', () => {
    cy.get('.sc-Axmtr >> .sc-fzplWN').click()
    cy.get('.sc-Axmtr').should('not.be.visible')
  })
})
