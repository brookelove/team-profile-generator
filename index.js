//TODO: write code for everyhting coming together
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

// runs the entire test where the prompt starts 
//runs the switch cases through here 

 const inquirer = require ('inquirer');
//  const Employee = require (`./Employee`)

const askmanager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message:'What is your managers name?', 
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your managers employee ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers email address?',
        },
        {
            type: 'Number',
            name: 'officeNumber',
            message: 'What is your office number (no spaces or hashes?)',
        },
        {
            type: 'list',
            name: 'selection',
            message: 'Please pick your team!',
            choices: ['Add an engineer', 'Add an Intern']
        }
    ]) .then (() => {
        mainmenu ()
    })
}

askmanager()

const mainmenu = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'selection',
            message: 'Please pick your team!',
            choices: ['Add an Engineer!', 'Add an Intern']
        }.then (ans => {
            switch (ans.selection) {
                case 'Add an Engineer!':
                createEngineer ();
            }
        })
    ])
}

const createEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name
        }
    ])
}