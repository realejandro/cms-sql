import { pool } from "../connection.js";
import inquirer from "inquirer";

class MenuDepartment {
    
    async addDepartment(name: string) {
        try {
            await pool.query(`INSERT INTO department (name) 
            values ($1);`, [name]);
            console.log("Department is added")
        } catch (error) {
          console.log(error);
        }
    }

    async getDepartments() {
        try {
          const result = await pool.query('SELECT * FROM department;');
          console.table(result.rows);
        } catch (error) {
          console.error('Error fetching employees:', error);
        }
      }
    
    async menuDepartment()  {
  
        const departments = await pool.query('SELECT name FROM department;');
        
        const result : {
          name_department:string
        } = await inquirer.prompt([
          {
            type:'input',
            name:'name_department',
            message:'Enter department name: '
          }
        ]);
      
        const { name_department } = result;
      
        try {
          await this.addDepartment( name_department ); 
          console.log('Department Added');
        } catch (error) {
          console.log(error);
        }
      
      }
}

export default new MenuDepartment();