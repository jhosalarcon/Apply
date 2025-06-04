export class ProductDetailsPage {
  enterQuantity(quantity) {
    cy.get('#quantity').clear().type(quantity.toString());
  }

  addToCart() {
    cy.get('.cart, .btn.btn-default.cart').first().click();
  }

  proceedToCheckout() {
    cy.get('a[href="/view_cart"]').first().click();
  }
}