import { pool } from "../connection.js";
import inquirer from "inquirer";
class MenuRole {
    async getRoles() {
        try {
            const result = await pool.query('SELECT * FROM role;');
            console.table(result.rows, ['id', 'title', 'salary', 'department_id']);
        }
        catch (error) {
            console.error('Error fetching employees:', error);
        }
    }
    async addRole(title, salary, department_id) {
        try {
            await pool.query(`INSERT INTO role (title, salary, department_id) 
            values ($1, $2, $3);`, [title, salary, department_id]);
        }
        catch (error) {
            console.log(error);
        }
    }
    async menuRole() {
        const departmentDbArr = await pool.query('SELECT id, name FROM department;');
        const result = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter role name: '
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary: '
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Select department: ',
                choices: departmentDbArr.rows.map((dep) => {
                    return {
                        name: dep.name,
                        value: dep.id
                    };
                })
            }
        ]);
        const { title, salary, department_id } = result;
        console.log(title, salary, department_id);
        try {
            await this.addRole(title, salary, department_id);
            console.log('Department Added');
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default new MenuRole();
