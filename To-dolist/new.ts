import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

const todo_List:string[] = [];
let exit = false;

async function main() {
    while(!exit) {
        const todo = await optionsMenu();

        switch (todo) {
          case "Existing Tasks":
            console.log(todo_List);
            break;
        
          case "Add new task":
            const newTask = await addTask();
            todo_List.push(newTask);
            break;
        
          case "Delete a Task":
            const tasktoDelete = await deleteTask();
            const index = todo_List.indexOf(tasktoDelete);
            if (index !== -1) {
                todo_List.splice(index, 1);
                console.log("Task deleted.");
              } else {
                console.log("Task not found.");
              }
              break;
        
          case "Exit":
            exit = true;
            break;
        
          default:
        }
        }
    }    


  async function optionsMenu () {
    const todo = await inquirer.prompt([
      {
        name: "todo",
        type: "list",
        message: "What do you want to do?",
        choices: ["Existing Tasks", "Add new task", "Delete a Task", "Exit"],
      },
    ]);
return todo.todo
}

async function addTask() {
    const task = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter the task:",
      },
    ]);
    return task.task;
  }
  
  async function deleteTask() {
    const task = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter the task to delete:",
      },
    ]);
    return task.task;
  }
  
  main();
