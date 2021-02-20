const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('checks to see if office number is captured', () => {
    let manager = new Manager('Erika', 12345, 'applesauce@abc123.com','805-555-1234');
    expect(manager.officeNumber).toBe('805-555-1234');
  });

  test('checks if they are Manager using getRole', () => {
    let manager = new Manager('Erika', 12345, 'applesauce@abc123.com','805-555-1234');
    expect(manager.getRole()).toBe('Manager');
  });