import express from 'express';
import { connectToDb } from './connection.js';
import MenuDepartment from './services/MenuDepartment.js';
import MenuEmployee from './services/MenuEmployee.js';
import MenuRole from './services/MenuRole.js';
import inquirer from 'inquirer';
import MenuManager from './services/MenuManager.js';
await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const menu = async () => {
    const result = await inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit',
            ],
        },
    ]);
    switch (result.options) {
        case 'View All Employees':
            await MenuEmployee.getEmployees();
            break;
        case 'Add Employee':
            await MenuEmployee.menuEmployee();
            break;
        case 'View All Roles':
            await MenuRole.getRoles();
            break;
        case 'Add Role':
            await MenuRole.menuRole();
            break;
        case 'View All Departments':
            await MenuDepartment.getDepartments();
            break;
        case 'Add Department':
            await MenuDepartment.menuDepartment();
            break;
        case 'Quit':
            console.log('Exiting the application.');
            process.exit();
        default:
            console.log('Invalid option selected.');
    }
    await menu();
};
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await MenuManager.menu();
});
