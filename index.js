// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./markdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please add a brief description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide instructions to install the project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can one contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests can one run on this application?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Which license has been used for this project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'IBM', 'GNU', 'Eclipse']
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email ID?',
        name: 'email',
    }
];

inquirer.prompt(questions).then((response) => {
    const data = generateMarkdown(response);
    fs.writeFile('README.md', data, (error) =>
        error ? console.error(err) : console.log('Readme generated!')
    );
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();