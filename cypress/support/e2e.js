import './commands';

before(() => {
  cy.log('====== Test Execution Started ======');
});

after(() => {
  cy.log('====== Test Execution Finished ======');
});
