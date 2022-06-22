// The ItemManager should go here. Remember that you have to export it.

import {readFileSync, writeFileSync} from "fs";
import {Todo} from "../db/models/";

import PokemonClient from "../clients/pokemon_client.js";

export default class ItemManager {
    // Constructor
    constructor() {
        this.history = [];
        this.pokemonClient = new PokemonClient();
        this.todoList = this.getTodoList() || [];
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
        const splitList = todo.split(",");
        if (this.checkNumbers(splitList)) {
            const pokemonIDArray = splitList;
            const pokemonNameArray = await this.pokemonClient.getPokemons(this.trimSpaces(splitList));
            for (const element of pokemonNameArray) {
                let todoObject = {
                    todo: element,
                    pokemonID: pokemonIDArray[pokemonNameArray.indexOf(element)],
                    isPokemon: true
                }
               await this.addToDB(todoObject);
            }
        }
        else{
            let todoObject = {
                todo: todo,
                pokemonID: null,
                isPokemon: false
            }
            await this.addToDB(todoObject);
        }
    }


    async addToDB(todo){
       await Todo.create({"todo": todo.todo, "isPokemon": todo.isPokemon, "pokemonID": todo.pokemonID});
    }

    getTodoList() {
        try{
            const data = Todo.findAll();
            console.log(data);
        }
        catch{
            console.log("No todo list found");
            return;
        }
    }


    deleteTodo(todo) {
        const list = this.getTodoList();
        list.forEach(element => {
            if (element.todo === todo) {
                this.history.push(element);
                list.splice(list.indexOf(element), 1);
            }
        });
        this.todoList = list;
        this.writeToFile();
    }

    clearTodoList(){
        this.todoList = [];
        this.writeToFile();
    }
}

