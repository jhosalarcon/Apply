// cypress/support/e2e.js

// Importa comandos personalizados para que estén disponibles globalmente
import './commands';

// Hook global opcional, se ejecuta antes de todos los tests
before(() => {
  cy.log('====== Test Execution Started ======');
});
