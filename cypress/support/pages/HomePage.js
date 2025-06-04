export class HomePage {
  visit() {
    cy.visit('/');
  }

  goToProducts() {
    cy.get('a[href="/products"]').click();
  }

  goToCart() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  goToLogin() {
    cy.get('a[href="/login"]').first().click();
  }
}
