export class ProductsPage {
  getProductByIndex(index) {
    return cy.get('.product-image-wrapper').eq(index);
  }

  viewProductDetails(index) {
    cy.get('.product-image-wrapper')
      .eq(index)
      .find('a')
      .contains('View Product')
      .click();
  }

  viewProductDetailsByName(productName) {
    cy.contains('.productinfo', productName)
      .parents('.product-image-wrapper')
      .find('a')
      .contains('View Product')
      .click();
  }
}
