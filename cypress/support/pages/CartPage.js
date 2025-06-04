export class CartPage {
  proceedToCheckout() {
    cy.contains("a", "Checkout").click();
  }
}
