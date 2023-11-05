import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

// (async () => {
//   await showBanner("Number Guessing Game");
// })();

let play = true;

while (play) {
  const RandomNum: number = Math.ceil(Math.random() * 10);
// console.log(RandomNum);

  const guessNumb = await inquirer.prompt([
    {
      type: "number",
      name: "UserNumber",
      message: chalk.green("Guess the number from 1 - 10"),
    },
  ]);

  if (guessNumb.UserNumber == RandomNum) {
    console.log(chalk.bold("Whoooo!! You Guessed the number right!! Yayyy!!!"));
  } else {
    console.log(chalk.red("Oopss! Try Again!"));
    play = false;
  }
}
