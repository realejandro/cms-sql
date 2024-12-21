SELECT 
    department.name AS department_name,
    role.title AS role_title,
    employee.first_name,
    employee.last_name
FROM 
    department
JOIN 
    role ON department.id = role.department_id
JOIN 
    employee ON role.id = employee.role_id;