export class ProductsPage {
  getProductByIndex(index) {
    // Los productos están en .product-image-wrapper (puede cambiar, inspeccionar en sitio)
    return cy.get('.product-image-wrapper').eq(index);
  }

  viewProductDetails(index) {
    cy.get('.product-image-wrapper')
      .eq(index)
      .find('a')
      .contains('View Product')
      .click();
  }
  
}
