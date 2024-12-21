import inquirer from 'inquirer';
// Fetch employees from the server
async function fetchEmployees() {
    try {
        const response = await fetch('http://localhost:3001/employees');
        const data = response.json(); // Display employees in a table format
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching employees:', error);
    }
}
// Fetch roles from the server
async function fetchRoles() {
    try {
        const response = await fetch('http://localhost:3001/roles');
        const data = response.json(); // Display employees in a table format
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching roles:', error);
    }
}
// Fetch departments from the server
async function fetchDepartments() {
    try {
        const response = await fetch('http://localhost:3001/departments');
        const data = response.json(); // Display employees in a table format
        return data;
    }
    catch (error) {
        console.error('Error fetching departments:', error);
    }
}
// Main menu function
export async function runMenu() {
    const result = await inquirer.prompt([
        {
            type: 'list',
            name: 'options', // The key in the returned object
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'Exit',
            ],
        },
    ]);
    switch (result.options) {
        case 'View All Employees':
            const data = await fetchEmployees();
            console.table(data);
            break;
        case 'View All Roles':
            await fetchRoles();
            break;
        case 'View All Departments':
            const depData = await fetchDepartments();
            console.log(depData);
            break;
        case 'Exit':
            console.log('Exiting the application.');
            process.exit();
        default:
            console.log('Invalid option selected.');
    }
    // Call the menu again to keep it running until user exits
    await runMenu();
}
