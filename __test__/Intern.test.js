const Intern = require('../lib/Intern');

test('checks to see if school is captured', () => {
    let intern = new Intern('Erika', 12345, 'applesauce@abc123.com', 'ucsb');
    expect(intern.school).toBe('ucsb');
});

test('checks if they are an intern', () => {
    let intern = new Intern('Erika', 12345, 'applesauce@abc123.com', 'ucsb');
    expect(intern.getRole()).toBe('Intern');
});

test('Check to see if school is captured with  getSchool', () => {
    let intern = new Intern('Erika', 12345, 'applesauce@abc123.com', 'ucsb');
    expect(intern.getSchool()).toBe('ucsb')
});