describe('Add todo form', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.byTestId('add-todo-button').click();
  })

  it('should create a todo', () => {
    const expectedTitle = 'This is a title';
    const expectedContent = 'Short description of the task.';
    cy.byTestId('title').type(expectedTitle);
    cy.byTestId('content').type(expectedContent);
    cy.byTestId('save').click();

    cy.url().should('match', /app$/);
    cy.get('app-to-do-item').should('have.length', 3);
    cy.get('app-to-do-item').last().get('mat-panel-title').should('contain', expectedTitle);

    cy.get('mat-panel-title').last().click();
    cy.get('app-to-do-item').last().byTestId('content').should('contain', expectedContent);
  })

  it('should disable save button', () => {
    cy.byTestId('save').should('be.disabled');

    const expectedTitle = 'This is a title';
    cy.byTestId('title').type(expectedTitle);
    cy.byTestId('content').click();

    cy.byTestId('save').should('be.enabled');
  })

  it('should display title error', () => {
    cy.byTestId('error-title-required').should('not.exist');

    cy.byTestId('title').click();
    cy.byTestId('content').click();

    cy.byTestId('error-title-required').should('be.visible');
  })

  it('should come back to home page', () => {
    cy.url().should('match', /app\/add$/);

    cy.byTestId('cancel').click();

    cy.url().should('match', /app$/);
  })
})
