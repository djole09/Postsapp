describe('It renders posts page and fetch 100 posts from api', () => {
  it('it has 100 posts', () => {
    cy.visit(Cypress.env('app_url'));
    cy.wait(2000);
    cy.get('[data-testid="posts"]').should('exist');
    cy.get('[data-testid="post-item-100"').should('exist');
  });

  it('open post item page after clicking on post title', () => {
    cy.visit(Cypress.env('app_url'));
    cy.wait(2000);
    cy.get('[data-testid="post-item-title-100"').should('exist');

    cy.get('[data-testid="post-item-title-100"').click();
    cy.wait(2000);

    cy.url().should('eq', `${Cypress.env('app_url')}/post/100`);
  });
});
