// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown  = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "fileName",
    message: "What is your Project Title?"
},{
    type: "text",
    name: "Description",
    message: "Please provide a description of the project."
},{
    name: "TableofContents",
    message: "Please list a Table of Contents:"
},{
    name: "Installation",
    message: "Please provide installation instructions."
},{
    name: "Usage",
    message: "Please provide Usage instructions."
},{ 
    type: "list",
    name: "License",
    message: "Please provide Licenses used.",
    choices: ['MIT', 'ISC License', 'Apache License 2.0', 'BSD License'],
},{
    name: "Contributing",
    message: "Please provide contribution details."
},{
    name: "Tests",
    message: "Please provide any testing data."
},{
    name: "GitHubName",
    message: "Please provide your name on GitHub."
},{
    name: "Email",
    message: "Please provide an email someone can contact you with."

}];

// TODO: Create a function to write README file

const writeToFile = (data) => {
    fs.writeFile(`./outputs/${data.fileName}.md`, generateMarkdown(data), err => {
        err ? console.error(err) : console.log('README created!');
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then(writeToFile);
    }

// Function call to initialize app
init();
