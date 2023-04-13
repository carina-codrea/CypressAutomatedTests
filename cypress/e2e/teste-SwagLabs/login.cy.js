describe('Teste Swag Labs',() => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('erorr message appears after introducing incorrect credentials',() => {    
        cy.get('[data-test="username"]').type('test');
        cy.get('[data-test="password"]').type('password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');
    })

    it('login with correct credentials',() => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').contains('Products').should('be.visible');
    })


})