// Create an ItemClient class here. This is what makes requests to your express server (your own custom API!)

const apiUrl = 'http://localhost:3000';
export default class item_client {
    async getTodos() {
        const response = await fetch(`${apiUrl}/todos`);
        const data = await response.json();
        return data;
    }

    async addTodo(todo) {
        const response = await fetch(`${apiUrl}/todo`, {
            method: "POST",
            body: JSON.stringify({todo}),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async updateStatus(todo, status) {
        const response = await fetch("http://localhost:3000/todo", {
            method: "PUT",
            body: JSON.stringify({
                todo: todo,
                status : status}),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async deleteTodo(todo) {
        const response = await fetch("http://localhost:3000/todo", {
            method: "DELETE",
            body: JSON.stringify({todo}),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    async clearTodoList() {
        const response = await fetch("http://localhost:3000/todos", {
            method: "DELETE"
        });
    }

}
