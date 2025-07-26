import "cypress-real-events";
require('@cypress/xpath');


describe('Login flow on Houmy.cz', () => {

  beforeEach(() => {
    cy.visit('https://houmy.cz');
    cy.viewport(1920, 1080);
  });

  it('Accepts cookies and navigates to login screen', () => {
    cy.acceptCookies();
    cy.navigateToLoginForm();
    cy.loginViaForm(Cypress.env('user_email'), Cypress.env('user_password'));

    cy.url().should('contain', '/cs/app/dashboard');
    cy.xpath('/html/body/div[1]/aside/div/div/div[1]/button/span[1]/span[1]').should('contain.text', 'Jan Novak');
    

  });

  it('shows error on invalid login', () => {
    cy.acceptCookies();
    cy.navigateToLoginForm();
    cy.loginViaForm(Cypress.env('user_email'), Cypress.env('wrong_password'));

    //cy.xpath('/html/body/div[1]/div').should('contain.text', 'Přihlášení se nezdařilo, zkuste to znovu');
    cy.contains('Přihlášení se nezdařilo, zkuste to znovu').should('be.visible');
  });

});
