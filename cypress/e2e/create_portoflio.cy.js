



describe('Create portfolio', () => {

  beforeEach(() => {
    cy.visit('https://houmy.cz');
    cy.viewport(1920, 1080);
    cy.acceptCookies();
    cy.navigateToLoginForm();
    cy.loginViaForm(Cypress.env('user_email'), Cypress.env('user_password'));
  });

it('Create portfolio', () => {
  cy.xpath('/html/body/div[1]/aside/div/nav/div/button[1]').click();
  cy.xpath('/html/body/div[1]/aside/div/nav/div/div[1]/ul/div/button').click();
  cy.addNewPortfolio();
  cy.xpath('/html/body/div[1]/section/div[1]/main/section[1]/button').click();
});

});
