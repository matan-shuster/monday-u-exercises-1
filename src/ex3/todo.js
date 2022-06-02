import ItemManager from './functions/ItemManager.js';

import {convert} from 'html-to-text';
import fetch from 'node-fetch';
import chalk from "chalk";
import { Command } from "commander";
import {fs} from 'fs';

const pokeimg= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
const image = `https://process.filestackapi.com/AJWw5n38DQ52lqq0vxGIwz/ascii=size:70/${pokeimg}`;
const program = new Command();
const itemManager = new ItemManager();

async function imageTest() {
    const response = await fetch(image);
    const data = await response.text();
    console.log(convert(data));
}

function createListFile(){
    if (!fs.existsSync("./todo.txt")) {
        fs.writeFileSync("./todo.txt", "");
    }

program
    .name("todo")
    .description("The todo command line application")
    .version("0.0.1");



}
program
    .command("add")
    .alias("a")
    .description("Add a todo task")
    .argument("<string>", "The todo task to add")
    .action(async (todo) => {
        createListFile();
        await itemManager.addTodo(todo);
        console.log(chalk.green(`Added ${todo} to the todo list`));
    })

program
    .command("list")
    .alias("l")
    .description("List all todo tasks")
    .action(() => {
        console.log(chalk.blue(`Todo list:`));
        let list = itemManager.getTodoList();
        console.log(list);
        list.forEach(element => {
            console.log(chalk.blue(`${element}`));
        })
        imageTest();
    });

program.parse();