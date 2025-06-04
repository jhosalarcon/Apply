export class ProductDetailsPage {
  enterQuantity(quantity) {
    cy.get('#quantity').clear().type(quantity);
  }

  addToCart() {
    cy.get('.cart').click();
  }

  proceedToCheckout() {
    cy.contains('a[href="/view_cart"]', 'View Cart').click();

  }
}