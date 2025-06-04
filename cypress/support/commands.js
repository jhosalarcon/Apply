import { faker } from '@faker-js/faker';

Cypress.Commands.add('registerRandomUser', (password = 'TestPassword123!') => {
  const name = faker.name.fullName();
  const email = faker.internet.email();

  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.get('input[id="id_gender1"]').check();
  cy.get('input[id="password"]').type(password);
  cy.get('select[id="days"]').select('10');
  cy.get('select[id="months"]').select('May');
  cy.get('select[id="years"]').select('1995');
  cy.get('input[id="first_name"]').type(name);
  cy.get('input[id="last_name"]').type('Doe');
  cy.get('input[id="address1"]').type('123 Test St');
  cy.get('select[id="country"]').select('India');
  cy.get('input[id="state"]').type('State');
  cy.get('input[id="city"]').type('City');
  cy.get('input[id="zipcode"]').type('12345');
  cy.get('input[id="mobile_number"]').type('1234567890');
  cy.get('button[data-qa="create-account"]').click();

  cy.contains('Account Created!').should('be.visible');
  cy.get('a[data-qa="continue-button"]').click();

  cy.wrap({ name, email, password }).as('registeredUser');
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('addProductToCart', (quantity) => {
  cy.get('#quantity').clear().type(quantity.toString());
  cy.get('.btn.btn-default.cart').click();
});
