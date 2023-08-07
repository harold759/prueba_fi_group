describe("Test Links Social Networks", () => {

    it("Link Twiter",() => {

        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Harold")
        cy.get('[data-test="lastName"]').type("España")
        cy.get('[data-test="postalCode"]').type("520001")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').contains("Thank you for your order!")
        cy.get('[data-test="back-to-products"]').click()
        cy.location("pathname").should("eq", "/inventory.html")

    })

    
})