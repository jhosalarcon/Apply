// cypress/support/commands.js
import { faker } from '@faker-js/faker';

// Comando para registrar usuario con datos aleatorios
Cypress.Commands.add('registerRandomUser', () => {
  const name = faker.name.fullName();
  const email = faker.internet.email();

  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  // Puedes guardar datos en alias si necesitas usarlos luego
  cy.wrap({ name, email }).as('registeredUser');
});

// Comando para login (si lo necesitas)
Cypress.Commands.add('login', (email, password) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

// Comando para agregar producto al carrito con cantidad variable
Cypress.Commands.add('addProductToCart', (quantity) => {
  cy.get('#quantity').clear().type(quantity.toString());
  cy.get('.btn.btn-default.cart').click(); // Ajusta selector según tu página
});
