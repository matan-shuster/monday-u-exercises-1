// Create an ItemClient class here. This is what makes requests to your express server (your own custom API!)

export default class item_client {
    async getTodos() {
        const response = await fetch("http://localhost:8000/todos");
        const data = await response.json();
        return data;
    }

    async addTodo(todo) {
        const response = await fetch("http://localhost:8000/todo", {
            method: "POST",
            body: JSON.stringify({todo}),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async deleteTodo(todo) {
        const response = await fetch("http://localhost:8000/todo", {
            method: "DELETE",
            body: JSON.stringify({todo}),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    async clearTodoList() {
        const response = await fetch("http://localhost:8000/todos", {
            method: "DELETE"
        });
    }

}
