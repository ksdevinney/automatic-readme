const inquirer = require ('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How do you install it?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How do you use it?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How should other users contribute?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'How do you test the project?',
            name: 'test',
        },
        {
            // how to phrase this?
            type: 'list',
            message: 'What licenses apply to the project?',
            name: 'license',
            choices: ["MIT", "BSD", "GPL"],
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
    ])

    .then((response) => {
        const fileName = `${response.title.toLowerCase().split(' ').join('')}.md`;   
        
        // create badge for license here
        const badgeUrl = 'https://img.shields.io/badge/license-`${response.license}`-green'
        console.log(badgeUrl);

        const newReadme = `
# ${response.title}

## Description

![license](${badgeUrl})

${response.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${response.install}

## Usage

${response.usage}

## Contributing

${response.contributing}

## Tests

${response.test}

## Questions

Please contact me at ${response.email} if you have any questions.

[My GitHub profile can be found here.](https://github.com/${response.username})
        `;
        
        fs.writeFile(fileName, newReadme, (err) =>
            err ? console.log (err) : console.log('Success! Look in the folder!')
            );
    });