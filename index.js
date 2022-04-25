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
const Manager = require('./develop/lib/Manager');
const Engineer = require ('./develop/lib/Engineer');
const Intern = require ('./develop/lib/Intern');
const generateHtml = require('./develop/util/generateHtml');

 const manager = [];
 const engineer = [];
 const intern = [];
 const fs = require ('fs');

const askmanager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message:'What is your managers name?', 
        },
        {
            type: 'Number',
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
            message: 'What is your managers office number (no spaces or hashes?)',
        },
    ]) .then (ans => {
        const newMana = new Manager (ans.managerName, ans.managerId, ans.managerEmail, ans.officeNumber);
        manager.push(newMana);
        console.log(newMana);
        console.log(manager[0]);
        mainmenu();
    })
}

askmanager()

const mainmenu = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'selection',
            message: 'Please pick your team!',
            choices: ['Add an Engineer!', 'Add an Intern!', 'Give me my Team!']
        }
    ]).then (ans => {
            switch (ans.selection) {
                case 'Add an Engineer!':
                    createEngineer ();
                    break;
                case 'Add an Intern!':
                    createIntern();
                    break;
                default: 
                    //generating html function goes here
                    console.log('generating html!');
                    fs.writeFileSync('./dist/team.html', generateHtml([...manager, ...engineer, ...intern]));
                    break;
            }
        })
}

const createEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?',
        },
        {
            type: 'Number',
            name: 'engineerID',
            message: "what is the engineers employee ID?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your managers email address?',
        }, 
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineers Github profile link?',
        },
    ]).then (ans => {
        const newEngin = new Engineer (ans.engineerName, ans.engineerID, ans.engineerEmail, ans.engineerGithub);
        engineer.push(newEngin);
        console.log(newEngin);
        mainmenu();
    })
}

const createIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?',
        },
        {
            type: 'Number',
            name: 'internID',
            message: "what is the intern employee ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your managers email address?',
        }, 
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does your intern go to?',
        },
    ]).then (ans => {
        const newIntr = new Intern (ans.internName, ans.internID, ans.internEmail, ans.internSchool);
        intern.push(newIntr);
        console.log(newIntr);
        mainmenu();
    })
}