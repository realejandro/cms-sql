import { pool } from "../connection.js";
import inquirer from "inquirer";
class MenuEmployee {
    async getEmployees() {
        try {
            const result = await pool.query('SELECT * FROM employee;');
            console.table(result.rows);
        }
        catch (error) {
            console.error('Error fetching employees:', error);
        }
    }
    async addEmployee(name, lastName, roleId, managerId) {
        try {
            await pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
            values ($1, $2, $3, $4);`, [name, lastName, roleId, managerId]);
        }
        catch (error) {
            console.log(error);
        }
    }
    async menuEmployee() {
        const roles = await pool.query('SELECT id, title FROM role;');
        const manager_id = await pool.query('SELECT id, manager_id, first_name, last_name FROM employee;');
        manager_id.rows.unshift('none');
        const result = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter employee first name: '
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter employee last name: '
            },
            {
                type: 'list',
                name: 'role',
                message: 'Enter employee role: ',
                choices: roles.rows.map((role) => role.title)
            },
            {
                type: 'list',
                name: 'managers',
                message: 'Who is the manager? ',
                choices: [{
                        name: 'None',
                        value: null
                    }, ...manager_id.rows.filter((m) => m.manager_id === null).map((man) => {
                        return {
                            name: man.first_name + " " + man.last_name,
                            value: man.id
                        };
                    })
                ]
            }
        ]);
        const { first_name, last_name, role, managers } = result;
        const roleObject = roles.rows.find(roleObj => roleObj.title === role);
        const idRole = roleObject.id;
        try {
            await this.addEmployee(first_name, last_name, idRole, managers);
            console.log('Employee Added');
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default new MenuEmployee();
