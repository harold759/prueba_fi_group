describe("Test Shopping Cart", () => {

    before(() => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

    it("Agregar producto",() => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should("be.visible")
        

    })


})