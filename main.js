#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n welcome to umairs-cli Number Guessing Game");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessednumber",
        type: "number",
        message: "Enter your guess number(Number list from 1 to 5 ):"
    }
]);
if (answer.guessednumber === randomnumber) {
    console.log("you guessed a correct number");
}
else {
    console.log("you guessed awrong number");
}
