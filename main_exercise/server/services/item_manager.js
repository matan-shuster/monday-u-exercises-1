// The ItemManager should go here. Remember that you have to export it.

// import Todo from "../db/models/todo.js";
const {Todo} = require("../db/models");

// import PokemonClient from "../clients/pokemon_client.js";
const PokemonClient = require("../clients/pokemon_client.js");
const {writeFileSync, readFileSync} = require("fs");

class ItemManager {
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
                    isPokemon: true,
                }
                await Todo.create({"todo": todoObject.todo, "pokemonID": todoObject.pokemonID, "isPokemon": todoObject.isPokemon, "status": todoObject.status});
            }
        }
        else{
            let todoObject = {
                todo: todo,
                isPokemon: false,
            }
            await Todo.create({"todo": todoObject.todo, "pokemonID": todoObject.pokemonID, "isPokemon": todoObject.isPokemon, "status": todoObject.status});
        }
    }



    async getTodoList() {
        try {
            const data = (await Todo.findAll()).map(element => element.get({plain:true}));
            return data;
        }

        catch{
            console.log("No todo list found");
            return;
        }
    }


    async deleteTodo(todo) {
        await Todo.destroy({
            where: {todo: todo}
        });
    }

    async clearTodoList(){
        await Todo.destroy({
            where: {}
        });
    }
    async updateStatus(todo, status){
        await Todo.update({
            status: status
        }, {
            where: {todo: todo}
        });
    }
}

module.exports = ItemManager;