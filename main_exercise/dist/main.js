import ItemClient from "./clients/item_client.js";

// Implement the `Main` class here
class Main{

    constructor() {
        this.itemClient = new ItemClient();
    }

    toggleLoader(state){
        document.getElementById("todoList").hidden = state;
        document.querySelector(".loader").hidden = !state;
    }
    toggleTodoList(state){
        document.getElementById("todoList").hidden = !state;
    }

    async renderTodoList() {
        this.toggleLoader(true);
        this.toggleTodoList(false);
        const todoList = await this.itemClient.getTodos();
        this.toggleLoader(false);
        this.toggleTodoList(true);
        document.getElementById("todoList").innerHTML = "";
        todoList.forEach(element => {
            const li = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "pl";
            checkbox.value = element.todo;
            checkbox.name = "selectTodo";
            checkbox.addEventListener("change", this.toggleDeleteButton.bind(this));
            li.append(checkbox);

            li.append(element.todo);

            const select = document.createElement("select");
            select.className = "dropdown";
            select.name = "selectStatus";
            const noStatus = document.createElement("option");
            noStatus.value = "";
            noStatus.text = "";
            const option1 = document.createElement("option");
            option1.value = "done";
            option1.text = "done";
            select.append(noStatus);
            select.append(option1);
            select.addEventListener("change", this.updateStatus.bind(this));
            if(element.status === "done"){
                select.value = "done";
            };
            li.append(select);

            li.id = 'todo' + todoList.indexOf(element);

            const deleteButton = document.createElement("img");
            deleteButton.src = "./images/delete_icon.svg";
            deleteButton.className = "deleteButton";
            deleteButton.addEventListener("click", () => {
                this.deleteTodo(element.todo);
            });
            li.appendChild(deleteButton);
            document.getElementById("todoList").appendChild(li);
        })
        this.toggleDeleteButton();
    }

    toggleDeleteButton() {
        if(document.querySelectorAll('.pl:checked').length > 0){
            document.getElementById("deleteTodo").hidden = false;
            return
        }
        document.getElementById("deleteTodo").hidden = true;
    }

    async addTodo() {
        try{
            const todo = document.getElementById("newTodo").value;
            if (todo.length === 0) {
                alert("Please enter a todo task");
                return;
            }
            document.getElementById("newTodo").value = "";
            this.toggleLoader(true);
            await this.itemClient.addTodo(todo);
            this.toggleLoader(false);
            await this.renderTodoList();
        }
        catch (e){
            alert(e);
        }

    }

    async deleteSelected() {
        let todos = document.querySelectorAll('.pl:checked');
        for (const element of todos) {
            await this.itemClient.deleteTodo(element.value);
        }
        await this.renderTodoList();
    }

    async deleteTodo(todo) {
        await this.itemClient.deleteTodo(todo);
        await this.renderTodoList();
    }

    async clearTodoList() {
        await this.itemClient.clearTodoList();
        await this.renderTodoList();
    }

    async updateStatus(select){
        try{
            const status = select.target.textContent;
            const todo = select.target.parentElement.innerText;
            await this.itemClient.updateStatus(todo, status);
        }
        catch (e) {
            console.log(e)
        }
    }

    init() {
        this.renderTodoList().catch(e => console.log(e));

        document.getElementById("addTodo").addEventListener("click", this.addTodo.bind(this));

        document.getElementById("deleteTodo").addEventListener("click", this.deleteSelected.bind(this));

        document.getElementById("deleteAll").addEventListener("click", this.clearTodoList.bind(this));
        this.toggleDeleteButton();
    }
}


const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
    // you should create an `init` method in your class
    // the method should add the event listener to your "add" button
    main.init();

});