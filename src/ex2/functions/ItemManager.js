import PokemonClient from "./PokemonClient.js";

export default class ItemManager {
    // Constructor
    constructor() {
        this.todoList = [];
        this.history = [];
    }

    trimSpaces(splitList) {
        const regex = /\s/g;
        let cleanList = splitList.map(element => element.replace(regex, ""));
        return cleanList;
    }

    checkNumbers(splitList) {
        const regex = /^\d+$/;
        return this.trimSpaces(splitList).every(element => regex.test(element));

    }

    async addTodo(todo) {
        const pokemonClient = new PokemonClient();
        if (todo.length === 0) {
            return alert("Please enter a todo task")
        }
        this.splitList = todo.split(",");
        if (this.checkNumbers(this.splitList)) {
            this.splitList = await pokemonClient.getPokemon(this.trimSpaces(this.splitList));
            this.splitList.forEach(element => {
                this.todoList.push(`${element}`);
            });
            return;
        }
        this.todoList.push(todo);
    }

    getTodoList() {
        return this.todoList;
    }

    getHistory() {
        if (this.history.length === 0) {
            return alert("History is currently empty")
        }
        return this.addTodo(this.history.pop());
    }

    deleteTodo(todo) {
        let list = this.todoList;
        list.forEach(element => {
            if (element === todo) {
                this.history.push(element);
                list.splice(list.indexOf(element), 1);
            }
        })
        this.todoList = list;
    }
}

