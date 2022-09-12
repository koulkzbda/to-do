describe('Home page', () => {

  beforeEach(() => {
    cy.visit('/');

  })

  it('should display all the tasks to be done', () => {
    cy.get('app-to-do-item').should('have.length', 2);
  })

  it('should display all the tasks done', () => {
    cy.get('.mat-tab-label').eq(1).click();

    cy.get('.mat-tab-body-active app-to-do-item').should('have.length', 1);
  })

  it('should display all the tasks archived', () => {
    cy.get('.mat-tab-label').last().click();

    cy.get('.mat-tab-body-active app-to-do-item').should('have.length', 0);
  })

  it('should go to add to do page', () => {
    cy.byTestId('add-todo-button').first().click();
    cy.contains('task');
  })
})
