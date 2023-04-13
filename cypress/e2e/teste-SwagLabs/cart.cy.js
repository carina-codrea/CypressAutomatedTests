describe('Cart',() => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        
    })

    it('add product to cart',() => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link .shopping_cart_badge').should('have.text','1');

        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('exist');
    })

    it('remove product from cart',() => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();

        cy.get('[data-test="remove-sauce-labs-backpack"').click();
        
        cy.get('.removed_cart_item').should('exist');
        cy.get('.shopping_cart_link').should('have.text','');

    })
})