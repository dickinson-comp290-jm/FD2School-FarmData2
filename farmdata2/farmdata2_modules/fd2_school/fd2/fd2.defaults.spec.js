describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text", "Harvest Report")
    })

    it("Check the default start and end dates", () => {
        cy.get("[data-cy=start-date]")
            .should("have.value", "2020-05-05")
        cy.get("[data-cy=end-date]")
            .should("have.value", "2020-05-15")
    })

    it("Check the crops in the crop drop down", () => {
        // let list = cy.get("[data-cy=crop-dropdown]").children()

        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]")
            .should("have.text", "All")

        // jmac note: works without the " > " too...
        cy.get("[data-cy=option0]")
            .should("have.text", "All")

        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option1]")
            .should("have.text", "ARUGULA")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option5]")
            .should("have.text", "BEAN-FAVA")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]")
            .children().should("have.length", 112)
        // cy.get("[data-cy=crop-dropdown]").children().eq(0).should("have.text","ARUGULA")
        // cy.get("[data-cy=crop-dropdown]").children().eq(4).should("have.text","BEAN-FAVA")
        // cy.get("[data-cy=crop-dropdown]").children().eq(110).should("have.text","ZUCCHINI")
        // cy.get("[data-cy=crop-dropdown]").children().should("have.length", 111)
    })
})
