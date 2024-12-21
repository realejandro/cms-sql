import MenuDepartment from './MenuDepartment.js';
import MenuEmployee from './MenuEmployee.js';
import MenuRole from './MenuRole.js';
import inquirer from 'inquirer';

class MenuManager {

    async menu () {
    
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
    
        await this.menu();
    }
}

export default new MenuManager();