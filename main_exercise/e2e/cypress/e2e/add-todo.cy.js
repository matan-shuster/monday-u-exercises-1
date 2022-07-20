describe("Add Todo Action", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#loader").should("not.exist");
    });

    it("Should add a new todo", () => {
       cy.get('#newTodo').type("Walk the dog, eat a sandwich, and go to the gym");
       cy.get('#addTodo').click();
    });

    it("Should delete a todo", () => {
        cy.get('Walk the dog, eat a sandwich, and go to the gym').parent().within(() => {
            cy.get('#deleteTodo').click();
        });

    });
});