describe('Order',() => {
   
    it('order a product',() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();

        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Wick');
        cy.get('[data-test="postalCode"]').type('550118');

        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        cy.get('.complete-header').should('have.text','Thank you for your order!');
    })
})