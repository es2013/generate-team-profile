// function Employee(name, id, email) {
class Employee{
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getID() {
        return this.id;
    }
    getRole() {
        return "Employee"; 
    }
  }

//rewriting below methods as a class-compatible versions
// Employee.prototype.getName = function()

// Employee.prototype.getId = function()

// Employee.prototype.getEmail = function()

// Employee.prototype.getRole=function()

module.exports = Employee;