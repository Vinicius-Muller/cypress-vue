
describe('check form dashboard', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('#mainBtn').click()
  });

  it('Should open the form when clicked', () => {
    cy.get('.v-navigation-drawer__content').should('be.visible')
  });

  it('Check if all inputs are visible', () => {
    cy.get('[data-cy="name"]').should('be.visible')
    cy.get('[data-cy="sirname"]').should('be.visible');
    cy.get('[data-cy="permissions"]').should('be.visible');
    cy.get('[data-cy="date-start"]').should('be.visible');
    cy.get('[data-cy="date-end"]').should('be.visible');
  });

  it('Check if name is valid', () => {
    const nameInput = '[data-cy="name"]'
    const stringTest = 'test first name';
    cy.get(nameInput).type(stringTest);
    cy.get(nameInput).find('input').should('have.value', stringTest);
  });

  it('Check if sirname is valid', () => {
    const nameInput = '[data-cy="sirname"]'
    const stringTest = 'test sir name';
    cy.get(nameInput).type(stringTest);
    cy.get(nameInput).find('input').should('have.value', stringTest);
  });

  it('Check if email is valid', () => {
    const nameInput = '[data-cy="email"]'
    const stringTest = 'test email example';
    cy.get(nameInput).type(stringTest);
    //check if contains @ and .com
    cy.get(nameInput).find('input').should('have.value', stringTest);
  })
})