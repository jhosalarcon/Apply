export class CartPage {
  proceedToCheckout() {
    cy.get('.check_out').click();
  }
}