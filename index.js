#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
//todos array 
//operation
//chalks
//inquirer 
let todoslist = [];
let condition = true;
console.log(chalk.yellow.bold("\n\tWelcome to Your New ToDo List: Let's Get Organized Together\n "));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            message: chalk.magenta("Add a Task and Stay on Top of Your Goals:"),
            name: "task",
        }
    ]);
    todoslist.push(addTask.task);
    console.log(`${addTask.task} ,\n\t New Task Added: Ready to Conquer!\n`);
    let addMoreTask = await inquirer.prompt([
        {
            type: "confirm",
            message: chalk.green("Do You Want to Add More Tasks ?"),
            name: "addmore",
            default: "False",
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log("Your Refreshed Task List:", todoslist);
