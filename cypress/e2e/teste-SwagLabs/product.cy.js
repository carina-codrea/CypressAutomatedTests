describe('Product',() => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        
    })

    it('access product details page',() => {
        cy.get('#item_4_title_link').click();
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=4');

    })

    it('back to products should return to the main page',() => {
        cy.get('#item_4_title_link').click();
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=4');

        cy.get('[data-test="back-to-products"]').click();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html');

    })
})