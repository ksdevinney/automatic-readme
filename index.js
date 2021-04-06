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
        }
    ])

    .then((response) => {
        const fileName = `${response.title.toLowerCase().split(' ').join('')}.md`;    

        const newReadme = `
        # ${response.name}
        ## Description
        ${response.description}
        `;
        
        fs.writeFile(fileName, newReadme, (err) =>
            err ? console.log (err) : console.log('Success!')
            );
    });