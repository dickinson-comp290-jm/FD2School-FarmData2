describe("Test the generation of the harvest report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check that button generates the report", () => {
        cy.get("[data-cy=report-header]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-header]").should("be.visible")
    })

    it("Check that details are correct when report is generated", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("have.text", "Farm: Sample Farm")
        cy.get("[data-cy=username]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "English")
    })

    it("Check that table headers are correct", () => {
        cy.get("[data-cy=harvest-table]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=harvest-table]").should("be.visible")
        //cy.get("[data-cy=h0]").should("exist")
        cy.get("[data-cy=h0]").should("have.text", "Row")
        cy.get("[data-cy=h1]").should("have.text", "Date")
        cy.get("[data-cy=h2]").should("have.text", "Area")
        cy.get("[data-cy=h3]").should("have.text", "Crop")
        cy.get("[data-cy=h4]").should("have.text", "Yield")
        cy.get("[data-cy=h5]").should("have.text", "Units")



        ////////////////////////////////////////////////////////////////
        // experiments with nesting
        ////////////////////////////////////////////////////////////////

        cy.get("[data-cy=harvest-table]").should("exist")
        cy.get("[data-cy=table]").should("exist")
        cy.get("[data-cy=table-headers]").should("exist")

        // fails
        // cy.get("[data-cy=table] > [data-cy=table-headers]").should("exist")



        cy.get("[data-cy=h0]").should("exist")
        cy.get("[data-cy=table-headers] > [data-cy=h0]").should("exist")
        cy.get("[data-cy=harvest-table] > [class=sticky-table] > [data-cy=table]").should("exist")
        cy.get("[data-cy=harvest-table] > [class=sticky-table] > [data-cy=table] > thead").should("exist")
        cy.get("[data-cy=harvest-table] > [class=sticky-table] > [data-cy=table] > thead > [data-cy=table-headers] > [data-cy=h0]").should("exist")



        // fails
        //cy.get("[data-cy=harvest-table] > [data-cy=h0]").should("exist")
        //cy.get("[data-cy=harvest-table] > [data-cy=h0]").should("have.text","Row")

        ////////////////////////////////////////////////////////////////
        // end experiments with nesting
        ////////////////////////////////////////////////////////////////


    })

    it("Check that number of columns is correct", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=table-headers]").children().should("have.length", 6)

    })

    it("Check that filtering by a single crop works correctly", () => {
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]")
            .select("ARUGULA")
        cy.get("[data-cy=generate-report-button]").click()

        // should be 4 rows of ARUGULA
        cy.get("[data-cy=table-body]").children().should("have.length", 4)


        // check crop in each row
        for (let rowNum = 0; rowNum < 4; rowNum++) {
            let theRow = cy.get("[data-cy=table-body]").children().eq(rowNum);
            theRow.children().should("have.length", 6)
            theRow.children().eq(3).should("have.text", "ARUGULA")
        }
    })




})