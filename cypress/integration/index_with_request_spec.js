describe('Index page with request', () => {
  const API = '**/api';

  beforeEach(() => {
    cy.server();
    cy.route('GET', API).as('getData');
    cy.visit(`http://localhost:1234/`);
  });

  it('should render request data', function () {
    cy.wait('@getData')
      .then(() => {
        cy.screenshot('index_with_request');
      });
  });
});