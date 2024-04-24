#! /usr/bin/env node

import inquirer from "inquirer"
let answer:{
    Sentence: "string"
}= await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Please Enter sentence or peragraph we count word "
    }
]);
let word = answer.Sentence.trim().split(" ")
console.log(`your sentence count is ${word.length}`)
