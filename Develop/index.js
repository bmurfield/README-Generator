// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const fileName = 'GENERATEDREADME.md';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your project be used?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Input any github repo that helped you with this project, or list contributors for this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project?',
        choices: ['Apache', 'MIT', 'Boost', 'None'],        
    },
    
    {
        type: 'input',
        name: 'tests',
        message: 'What is an example of how your application works?'
    },
    {
        type: 'input',
        name: 'github',
        message: "Post your github profile link here:"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Include your email here:'
    }
];

// TODO: Create a function to write README file
function writeReadMe(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeReadMe(fileName, generateMarkdown(response))
        )
}

// Function call to initialize app
init();
