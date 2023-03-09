describe("Test actions on the harvest report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check that clicking on Generate Report button correctly generates a report", () => {
        // no report title is visible before clicking the button
        cy.get("[data-cy=report-title]").should("not.exist")
        // click button
        cy.get("[data-cy=generate-report-btn]").click()
        // report title should be visible now
        cy.get("[data-cy=report-title]").should("be.visible")
        
    })

})
