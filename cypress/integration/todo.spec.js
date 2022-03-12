
describe("Todo Test", () => {
    it("renders correctly", () =>{

        cy.visit("/")
        cy.get("#root").should("exist")
    })

    it("renders form", () => {

        cy.visit("/")
        cy.get('[data-testid="input"]').should('have.value', '')
    })

    it("allows to add task", () => {

        cy.get('[data-testid="input"]').type('New Task added')
        cy.get('[data-testid="sendButton"]').click()
        cy.get('[data-testid="input"]').should('have.value', '')
        cy.contains('New Task added')
    })

    it("allows to delete task", () => {

        cy.get('[type="checkbox"]').check()
        cy.contains("New Task added").should("not.exist")
    })
})