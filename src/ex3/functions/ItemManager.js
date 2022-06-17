import PokemonClient from "./PokemonClient.js";
import fs from "fs";
import asciify from "asciify-image";
export default class ItemManager {
    // Constructor
    constructor() {
        this.todoList = [];
        this.history = [];
        this.pokemonClient = new PokemonClient();
        this.todoList = this.getTodoList();
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
        const splitList = todo.split(",");
        if (this.checkNumbers(splitList)) {
            const pokemonIDArray = splitList;
            const pokemonNameArray = await this.pokemonClient.getPokemons(this.trimSpaces(splitList));
            pokemonNameArray.forEach(element => {
                let todoObject = {
                    todo: element,
                    pokemonID: pokemonIDArray[pokemonNameArray.indexOf(element)],
                    isPokemon: true
                }
                this.todoList.push(todoObject);
            });

        }
        else{
            let todoObject = {
                todo: todo,
                isPokemon: false
            }
            this.todoList.push(todoObject);
        }
        this.writeToFile();
    }


    writeToFile(){
        fs.writeFileSync("todo.json", JSON.stringify(this.todoList));
    }



    getTodoList() {
        try{
            const data = fs.readFileSync("todo.json");
            const list = JSON.parse(data);
            return list;
        }
      catch{
            return "Could not get todoList";
      }
    }


    deleteTodo(number) {
        const list = this.getTodoList();
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



