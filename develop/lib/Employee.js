// TODO: Write code to define and export the Employee class
/* PSEUDOCODE HERE!
1. prompt for team members and information
        * CLICK on email goes to email 
        * CLICK github username github opens to new page 
2. The first class is an Employee then three other classes to spereate them 
    A. prompt to enter team manager's name, employee Id, email address, and office number 
        a. inital promptts use ingquirer then run a loop that runs through all of it 
        b. this would be my main prompt then I would create switch cases from it 
    B. presented with a menu to add either an engineer or an intern or an employee
        a.recursive loop that needs to have a quit
    C. when i select the engineer I am prompted to enter in name ID, email, Github username and then taken back to the menu 
        a. prompt using inquirer for github, email or etc. 
        b. goes back to the menu of "make a intern , make an engineer, or quit"
    D. when i select the intern I am prompted to enter in name ID, email, school and then taken back to the menu 
* these are basically the same just need to change the words a little 
    E. When I have finished building the team then i exit the applicaion 
3. HTML is generated because of the information that they put in.
    A. needs to have a HTML file and a CSS file with cards and corresponding outlook
    B. need to make it so you can add cards to the html and not have cards premade
        a. that would be like adding seperate items from html to the cards  */

const getName = []
// names.forEach (name =>{
//     name.
// })

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } 
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole () {
        return 'Employee';
    }
}

module.exports = Employee, getName;