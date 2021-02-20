const { any } = require('expect');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    
    let employee = new Employee('Erika',12345, 'applesauce@abc123.com');
    // Create a test that checks if the properties are strings or numbers
    expect(employee.name).toEqual(expect.any(String))
    // Create a test that checks if the `strength` and `hitpoints` are `numbers`
    // YOUR CODE HERE
    expect(employee.email).toEqual(expect.any(String))
    
  });

  test('test if name is captured using getName', () => {
    let employee = new Employee('Erika', 12345, 'applesauce@abc123.com');
    expect(employee.getName()).toBe('Erika');
  });

  test('test if id is captured using getID', () => {
    let employee = new Employee('Erika', 12345, 'applesauce@abc123.com');
    expect(employee.getID()).toEqual(expect.any(Number));
  });

  test('test if email is captured using getEmail', () => {
    let employee = new Employee('Erika', 12345, 'applesauce@abc123.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
  });

  test('checks if they are an employee using getRole', () => {
    let employee = new Employee('Erika', 12345, 'applesauce@abc123.com');
    expect(employee.getRole()).toBe('Employee');
  });