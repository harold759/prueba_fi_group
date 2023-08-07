describe("Test login", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it("Validar login",() => {

        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.location("pathname").should("eq", "/inventory.html")

    })

    it("login sin ingresar usuario",() => {

        cy.get("#login-button").click()
        cy.get(".error-message-container").contains("Epic sadface: Username is required")
    })

    it("login sin ingresar contraseña",() => {

        cy.get("#user-name").type("standard_user")
        cy.get("#login-button").click()
        cy.get('.error-message-container').contains("Epic sadface: Password is required")

    })

    it("login con usuario bloqueado",() => {
        
        cy.get("#user-name").type("locked_out_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get('.error-message-container').contains("Epic sadface: Sorry, this user has been locked out.")

    })



})