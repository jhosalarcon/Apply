import { faker } from '@faker-js/faker';
import { HomePage } from '../support/pages/HomePage';
import { ProductsPage } from '../support/pages/ProductsPage';
import { ProductDetailsPage } from '../support/pages/ProductDetailsPage';
import { CartPage } from '../support/pages/CartPage';
import { AuthPage } from '../support/pages/AuthPage';

function getRandomQuantity(min = 1, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Full Product Purchase Flow with Registration', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const productDetailsPage = new ProductDetailsPage();
  const cartPage = new CartPage();
  const authPage = new AuthPage();

  it('should register, add product to cart, confirm order and logout', () => {
    // Datos aleatorios
    const name = faker.person.firstName();
    const email = faker.internet.email();

    // 1. Ir al sitio
    homePage.visit();

    // 2. Ir a Products
    homePage.goToProducts();

    // 3. Ver detalles del tercer producto
    productsPage.viewProductDetails(2);

    // 4. Cantidad aleatoria entre 1 y 20
    const quantity = getRandomQuantity();
    productDetailsPage.enterQuantity(quantity);

    // 5. Agregar al carrito
    productDetailsPage.addToCart();

    // 6. Ir al carrito
    productDetailsPage.proceedToCheckout();

    // 7. Click en Login/Signup
    authPage.clickSignupLogin();

    // 8. Registrar nuevo usuario
    authPage.register(name, email);

    // 9. Ir al carrito otra vez (después del login redirige al home)
    cy.get('a[href="/view_cart"]').first().click();

    // 10. Confirmar pedido (Checkout)
    cy.get('a.check_out').click();

    // Confirmar que se llegó a la página de pago
    cy.contains('Review Your Order').should('exist');

    // 11. Cerrar sesión
    authPage.logout();
  });
});
