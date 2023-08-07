describe("Test Links Social Networks", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

    it("Link Twiter",() => {

        cy.get(".social_twitter > a").click()

    })

    it("Link Facebook",() => {

        cy.get(".social_facebook > a").click()

    })

    it("Link Linkedin",() => {

        cy.get(".social_linkedin > a").click()
    })


})