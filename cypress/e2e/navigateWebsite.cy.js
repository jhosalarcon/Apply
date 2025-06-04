import { faker } from "@faker-js/faker";
import { HomePage } from "../support/pages/HomePage";
import { ProductsPage } from "../support/pages/ProductsPage";
import { ProductDetailsPage } from "../support/pages/ProductDetailsPage";
import { AuthPage } from "../support/pages/AuthPage";

function getRandomQuantity(min = 1, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const viewports = [
  { device: "Desktop", width: 1280, height: 720 },
  { device: "Mobile", width: 375, height: 667 },
];

viewports.forEach(({ device, width, height }) => {
  describe(`Full Product Purchase Flow with Registration - ${device} viewport`, () => {
    it(`should register, add product to cart, confirm order and logout on ${device}`, () => {
      cy.viewport(width, height);
      cy.log(`Running test on ${device} viewport`);

      // Crear instancias dentro del test
      const homePage = new HomePage();
      const productsPage = new ProductsPage();
      const productDetailsPage = new ProductDetailsPage();
      const authPage = new AuthPage();

      const name = faker.person.firstName();
      const email = faker.internet.email();

      homePage.visit();
      homePage.goToProducts();

      // Usa índice si no tienes viewProductDetailsByName
      productsPage.viewProductDetails(2);

      const quantity = getRandomQuantity();
      productDetailsPage.enterQuantity(quantity);
      productDetailsPage.addToCart();

      productDetailsPage.proceedToCheckout();

      authPage.clickSignupLogin();
      authPage.register(name, email);

      homePage.goToCart();

      cy.get("a.check_out").click();
      cy.contains("Review Your Order").should("exist");

      authPage.logout();
    });
  });
});
