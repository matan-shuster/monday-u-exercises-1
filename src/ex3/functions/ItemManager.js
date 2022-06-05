import PokemonClient from "./PokemonClient.js";
import fs from "fs";
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
           console.log("Please enter a todo task");
           return;
        }
        this.todoList= this.getTodoList();
        this.splitList = todo.split(",");
        if (this.checkNumbers(this.splitList)) {
            this.splitList = await pokemonClient.getPokemon(this.trimSpaces(this.splitList));
            this.splitList.forEach(element => {
                let todoObject = {
                    todo: element,
                    isPokemon: true
                }
                this.todoList.push(todoObject);
                console.log(this.todoList)
            });
            this.writeToFile();
            return;

        }
        let todoObject = {
            todo: todo,
            isPokemon: false
        }
        this.todoList.push(todoObject);
        this.writeToFile();
    }


    writeToFile(){
        fs.writeFileSync("todo.json", JSON.stringify(this.todoList));
    }


    getTodoList() {
        try{
            let data = fs.readFileSync("todo.json");
            let list = JSON.parse(data);
            return list;
        }
      catch{
            return [];
      }
    }


    // getHistory() {
    //     if (this.history.length === 0) {
    //         return alert("History is currently empty")
    //     }
    //     return this.addTodo(this.history.pop());
    // }

    deleteTodo(number) {
        let list = this.getTodoList();
        list.splice(number, 1);
        this.todoList = list;
        this.writeToFile();
    }

    clearTodoList(){
        this.todoList = [];
        this.writeToFile();
    }
}



