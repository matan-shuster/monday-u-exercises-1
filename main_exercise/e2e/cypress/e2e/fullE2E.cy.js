describe('Clear all todos', function () {
    it("Clear all todos", () => {
        cy.visit("/")
        cy.get("#deleteAll").click();
        cy.get("#todoList").children().should("have.length", 0);
    });
});

describe("Add Todo Action", () => {
    beforeEach(() => {
        cy.get("#loader").should("not.exist");
    });

    it("Should add a new todo", () => {
        cy.get('#newTodo').type("Walk the dog");
        cy.get('#addTodo').click();
        cy.get('#todoList').should("contain", "Walk the dog");
    });

});

describe("Should add 3 pokemon todos", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#loader").should("not.exist");
    });

    it("Should add a new todo with a pokemon", () => {
        cy.get('#newTodo').type("1,2,3");
        cy.get('#addTodo').click();

        cy.get('#todoList').should("contain", "Ivysaur");
        cy.get('#todoList').should("contain", "Venusaur");
        cy.get('#todoList').should("contain", "Bulbasaur");
    });

});

describe("Should delete a todo", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#loader").should("not.exist");
    });
    it("Should delete a todo", () => {
        cy.get('#todoList').contains("Walk the dog").parent().within(() => {
            cy.get('#deleteTodo').click();
        });
    });
});

describe("Should change status of a todo", () => {
    it("Should change status of Ivysaur", () => {
        cy.get('#todoList').contains("Ivysaur").parent().within(() => {
            cy.get('#Status').click().children().get(".Done").click();
        });

        cy.get('#todoList').contains("Ivysaur").parent().within(() => {
            cy.get('#Status').children().should("contain", "Done");
        });
    });
    //Change Bulbasaur to In Progress
    // TODO - Add a test to change Bulbasaur to In Progress
    it("Should change status of Bulbasaur", () => {
        cy.get('#todoList').contains("Bulbasaur").parent().within(() => {
            cy.get('#Status').click().children().get('.In Progress').click();
        });

        cy.get('#todoList').contains("Bulbasaur").parent().within(() => {
            cy.get('#Status').children().should("contain", "In Progress");
        });
    });
});

describe("Should change urgency of a todo", () => {

    it("Should change urgency of Ivysaur", () => {
        //Change Ivysaur to high urgency
        cy.get('#todoList').contains("Ivysaur").parent().within(() => {
            cy.get('#Urgency').click().children().get(".High").click();
        });

        cy.get('#todoList').contains("Ivysaur").parent().within(() => {
            cy.get('#Urgency').children().should("contain", "High");
        });
    })
        it("Should change urgency of Bulbasaur", () => {
        //Change Bulbasaur to low urgency
        cy.get('#todoList').contains("Bulbasaur").parent().within(() => {
            cy.get('#Urgency').click().children().get(".Low").click();
        });
        cy.get('#todoList').contains("Bulbasaur").parent().within(() => {
            cy.get('#Urgency').children().should("contain", "Low");
        });
    });

});

describe('Should delete selected', function () {
    it("Should delete selected", () => {
        cy.get('#todoList').contains("Venusaur").parent().within(() => {
            cy.get("[type=checkbox]").check({force: true});
        });
        cy.get('#deleteSelected').click();
    });
    
});


describe("Filter todos", () => {
    it("Should filter todos by status",() => {
        cy.get('#Filter').click();
        cy.get('#Filter').children().contains("Done").click();
        cy.get("#todoList").children().should("have.length", 1);
    });
});
