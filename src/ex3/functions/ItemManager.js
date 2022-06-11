import PokemonClient from "./PokemonClient.js";
import fs from "fs";
import asciify from "asciify-image";
export default class ItemManager {
    // Constructor
    constructor() {
        this.todoList = [];
        this.history = [];
        this.pokemonClient = new PokemonClient();
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
        if (todo.length === 0) {
           console.log("Please enter a todo task");
           return;
        }
        this.todoList= this.getTodoList();
        this.splitList = todo.split(",");
        if (this.checkNumbers(this.splitList)) {
            let pokemonIDArray = this.splitList;
            this.splitList = await this.pokemonClient.getPokemons(this.trimSpaces(this.splitList));
            this.splitList.forEach(element => {
                let todoObject = {
                    todo: element,
                    pokemonID: pokemonIDArray[this.splitList.indexOf(element)],
                    isPokemon: true
                }
                this.todoList.push(todoObject);
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

    async image(pokemonID){
        await asciify(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`, {fit:'box', width: '200%', height:'200%'}, (err, res) => {
            console.log(res);
        });
    }
}



