// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
// const { getFilename } = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "fileName",
    message: "What is your Project Title?"
},{
    name: "Description",
    message: "Please provide a description of the project."
},{
    name: "Table of Contents",
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
    choices: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
},{
    name: "Contributing",
    message: "Please provide contribution details."
},{
    name: "Tests",
    message: "Please provide any testing data."
},{
    name: "Questions",
    message: "Please provide content for a question section."
}];

// TODO: Create a function to write README file

const writeToFile = (data) => {
    let info = JSON.stringify(data);
    fs.writeFile(`./outputs/${data.fileName}.md`, info, err => {
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
