describe('Test for FieldKit Sub-Tabs', () => {

  beforeEach(() => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-field-kit')
  })

  //issue #200, sub-task 1
  it('Verify that FieldKit tab contains sub-tabs for "Info" and "Seeding Input"', () => {
    cy.get('.pagination-sm').contains('Info').should('exist')
    cy.get('.pagination-sm').contains('Seeding Input').should('exist')
  })

  //issue #200, sub-task 2
  it('checks the order of the tabs is “Info” and then “Seeding Input.”', () => {
    cy.get('ul.pagination-sm')
      .find('li')
      .filter(':contains("Info")')
      .next()
      .should('contain', 'Seeding Input');
  })

  //issue #200, sub-task 3
  it('checks the correct number of sub-tabs', () => {
    cy.get('ul.pagination-sm')
      .find('li')
      .filter(':contains("Info"), :contains("Seeding Input")')
      .should('have.length', 2)
  })

})