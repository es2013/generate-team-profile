const Engineer = require('../lib/Engineer');

const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

test('checks to see if github username is captured', () => {
    let engineer = new Engineer('Erika', 12345, 'applesauce@abc123.com', 'github123');
    expect(engineer.github).toBe('github123');
});

test('checks if they are Manager using getRole', () => {
    let engineer = new Engineer('Erika', 12345, 'applesauce@abc123.com', 'github123');
    expect(engineer.getRole()).toBe('Engineer');
});

test('Check to see if github username is captured using getGithub', () => {
    let engineer = new Engineer('Erika', 12345, 'applesauce@abc123.com', 'github123');
    expect(engineer.getGithub()).toBe('github123')
});