describe("Test Shopping Cart", () => {

    before(() => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("problem_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

    it("Agregar producto",() => {

        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('.inventory_details_name').contains("Sauce Labs Backpack")
        

    })


})