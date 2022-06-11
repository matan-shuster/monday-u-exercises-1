import ItemManager from './functions/ItemManager.js';

import fetch from 'node-fetch';
import chalk from "chalk";
import { Command } from "commander";
import fs from 'fs';
const program = new Command();
const itemManager = new ItemManager();




function createListFile(){
    if (!fs.existsSync("./todo.json")) {
        fs.writeFileSync("./todo.json", JSON.stringify([]));
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
        const list = itemManager.getTodoList();
        list.forEach(element => {
            console.log(chalk.blue(`${element.todo}`));
        })
        image();
    });

program
    .command("delete")
    .alias("d")
    .description("delete a todo task")
    .argument("<number>", "Number of task to delete")
    .action(async (number) => {
        await itemManager.deleteTodo(number);
        console.log(chalk.green(`Removed ${number} from the todo list`));
    })

program
    .command("clear")
    .alias("c")
    .description("Clear all todo tasks")
    .action(() => {
        itemManager.clearTodoList();
        console.log(chalk.green(`Cleared all todo tasks`));
    });

program
    .command("image")
    .alias("i")
    .description("Display an image of a pokemon")
    .argument("<number>", "Number of task to delete")
    .action(async (number) => {
        await itemManager.image(number);
    });

program.parse();