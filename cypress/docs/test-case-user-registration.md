# Test Case: User Registration and Product Purchase Flow

## Preconditions
- El sitio [https://automationexercise.com](https://automationexercise.com) está en línea.
- Cypress está configurado en el entorno local.
- Se ejecuta en un navegador compatible (Chrome, Edge, etc.).

## Test Steps
1. Navegar al sitio web.
2. Ir a la sección “Products”.
3. Seleccionar el tercer producto y ver detalles.
4. Ingresar una cantidad aleatoria (1-20) y agregar al carrito.
5. Proceder al carrito.
6. Hacer clic en “Signup / Login”.
7. Registrar una nueva cuenta con datos aleatorios (nombre, email).
8. Completar el formulario de registro.
9. Continuar y volver al carrito.
10. Proceder al checkout.
11. Validar que se muestre “Review Your Order”.
12. Cerrar sesión.

## Expected Results
- El producto debe agregarse correctamente al carrito.
- El usuario debe registrarse exitosamente.
- El flujo debe llegar hasta el paso de “Review Your Order”.
- El logout debe funcionar sin errores.
