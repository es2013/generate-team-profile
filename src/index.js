const inquirer = require('inquirer');
const fs = require('fs');
//export the constructor functions
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager')
const generateHTML = require('./html-template');

//team variables
let manager = [];
let engineer = [];
let intern = [];
let employeeArray = { manager, engineer, intern };


// sample inquirer code from MODULE Project
// .prompt({
//   type: 'list',
//   message: 'Which potion would you like to use?',
//   name: 'action',
//   choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
// })
// .then(({ action }) => {
//   const potionDetails = action.split(': ');

//   this.player.usePotion(potionDetails[0] - 1);
//   console.log(`You used a ${potionDetails[1]} potion.`);
// });
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter teammate name?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter teammate name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter teammates ID number'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter teammate email',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select teammate role from list provided below',
            choices: ['Manager', 'Engineer', 'Intern'],

        }
    ])
        .then(({ name, id, email, role }) => {
            if (role === 'Manager') {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the office number?'
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add another teammate?',
                    default: false
                }])

                    .then(({ officeNumber, addEmployee }) => {
                        manager.push(new Manager(name, id, email, officeNumber))
                        if (addEmployee) {
                            return promptUser();
                        }
                    })
            }
            else if (role === 'Engineer') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the github username?',
                        validate: github => {
                            if (github) {
                                return true;
                            } else {
                                console.log('Please enter your GitHub username!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'addEmployee',
                        message: 'Would you like to add another teammate?',
                        default: false
                    }])
                    .then(({ github, addEmployee }) => {
                        engineer.push(new Engineer(name, id, email, github))
                        if (addEmployee) {
                            return promptUser();
                        }
                    })
            } else if (role === 'Intern') {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'What school did you attend?',

                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add another teammate?',
                    default: false
                }
                ])
                    .then(({ school, addEmployee }) => {
                        intern.push(new Intern(name, id, email, school))
                        if (addEmployee) {
                            return promptUser();
                        }
                    })
            }
        })
        .then(data => {
            return generateHTML(employeeArray)
        })
        .then(answers => {
            return writeFile(answers)
        })

};


promptUser()
  
// Create a function to write file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/index.html', fileContent, error => {
            if (error) {
                reject(error);
                return;
            }

            resolve({
                ok: true,
                message: 'index file was created'
            })
        })
    })
}


