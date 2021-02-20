const { MODULESPECIFIER_TYPES } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');

//export the constructor functions
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager')


// sample inquirer code from MODULES
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
