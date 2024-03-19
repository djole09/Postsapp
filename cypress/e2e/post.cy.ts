describe('it renders post page', () => {
  it('Visits post page and render loading component', () => {
    cy.visit(`${Cypress.env('app_url')}/post/1`);
    cy.get('[data-testid="loading"]').should('exist');
  });

  it('Visits post page and render post item and check number of the comments', () => {
    cy.visit(`${Cypress.env('app_url')}/post/1`);
    cy.wait(3000);

    cy.get('[data-testid="post"]').should('exist');
    cy.get('[data-testid="post-title"]').should('exist');
    cy.get('[data-testid="post-name"]').should('have.text', 'Leanne Graham');
    cy.get('[data-testid="post-comments"]').should('exist');

    // Check comments length
    cy.get('[data-testid="post-comments"]')
      .find('._comment_container_ei2h7_1')
      .should('have.length', 5);
  });
});
