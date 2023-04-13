describe('Menu',() => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        
    })

    it('open and close the side menu',() => {
       
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu-wrap').should('have.attr','aria-hidden','false');

        cy.get('#react-burger-cross-btn').click();
        cy.get('.bm-menu-wrap').should('have.attr','aria-hidden','true');

    })

     it('logout',() => { 
            cy.get('#react-burger-menu-btn').click();
            cy.get('#logout_sidebar_link').click();
            cy.url().should('eq','https://www.saucedemo.com/');
    })
})