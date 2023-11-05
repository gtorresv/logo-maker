const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Please enter up to three characters.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Please enter the text color as a color keyword or hexadecimal number.',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape from the following list:',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'Choose a color for the shape as a color keyword or hexadecimal number.',
        name: 'shapeColor'
    }
];