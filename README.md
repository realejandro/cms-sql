# Employee Management System

## Description
The Employee Management System is a command-line application that allows users to manage a company's employee database. It provides functionalities to view, add, and update employees, roles, and departments, leveraging Node.js, PostgreSQL, and the Inquirer package.

# Video
In this video, I am explaining how my app work.

 https://drive.google.com/file/d/1o4edQ9H3KcoXvy1AfNKnZnyeV_h6s5NE/view?usp=sharing

## Features
- View all employees, roles, and departments.
- Add new employees, roles, and departments.
- Update an employee's role.
- Assign managers to employees.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **PostgreSQL**: Database for storing employee, role, and department information.
- **Inquirer**: Command-line interaction.
- **TypeScript**: Ensures type safety and modern JavaScript features.
- **Express.js**: Backend framework to create connection between the database and code.
- **pg-node**: Library to handle database and typescript

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Ensure PostgreSQL is installed and running.
   - Create a database and configure connection details in `connection.ts`.
   - Run the SQL schema and seed files to populate initial data:
     ```bash
     psql -U <username> -d <database_name> -f schema.sql
     psql -U <username> -d <database_name> -f seeds.sql
     ```

## Usage
1. Start the application:
   ```bash
   npm start
   ```
2. Follow the prompts to interact with the system:
   - Select options from the menu.
   - Provide required details for adding or updating records.

## Database Schema
### Tables
1. **department**
   - `id`: Primary key.
   - `name`: Department name.
2. **role**
   - `id`: Primary key.
   - `title`: Role title.
   - `salary`: Role salary.
   - `department_id`: Foreign key referencing the department.
3. **employee**
   - `id`: Primary key.
   - `first_name`: Employee first name.
   - `last_name`: Employee last name.
   - `role_id`: Foreign key referencing the role.
   - `manager_id`: Foreign key referencing another employee.

## Scripts
- **Start Application**: `npm start`
- **Run TypeScript Build**: `npm run build`
- **Lint Code**: `npm run lint`

## Example Commands
### View All Employees
- Select "View All Employees" from the menu to see a table of all employees.

### Add a New Employee
1. Select "Add Employee".
2. Provide the following details:
   - First name
   - Last name
   - Role (select from a list of existing roles)
   - Manager (select from a list of existing employees or leave blank)

### Update Employee Role
1. Select "Update Employee Role".
2. Choose an employee to update.
3. Select a new role for the employee.

## Future Enhancements
- Add functionality to delete employees, roles, and departments.
- Provide additional filtering and search capabilities.
- Enhance user experience with better error handling and validations.

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [TypeScript](https://www.typescriptlang.org/)

