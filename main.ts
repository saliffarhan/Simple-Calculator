#!/usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message: "Enter your first value", type: "number", name: "num1"},
    {message: "Enter your Second value", type: "number", name: "num2"},
    {
        message: "Select your correct operator: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divide", ],
    },

]);

if(answer.operator === "Addition"){
    console.log(answer.num1 + answer.num2);
}else if(answer.operator === "Subtraction"){
    console.log(answer.num1 - answer.num2);
}else if(answer.operator === "Multiplication"){
    console.log(answer.num1 * answer.num2);
}else if(answer.operator === "Divide"){
    console.log(answer.num1 / answer.num2);
}else{
    console.log("Sorry Please Select your correct operator");
    
};