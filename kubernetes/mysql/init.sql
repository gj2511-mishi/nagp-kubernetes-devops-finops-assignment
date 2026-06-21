CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);

INSERT INTO employees (name, department, designation, salary)
SELECT 'Gaurav Joshi', 'Engineering', 'Software Engineer', 80000
WHERE NOT EXISTS (SELECT 1 FROM employees LIMIT 1);

INSERT INTO employees (name, department, designation, salary)
SELECT 'Meenakshi Dhyani', 'HR', 'HR Manager', 70000
WHERE NOT EXISTS (SELECT 1 FROM employees WHERE id = 2);

INSERT INTO employees (name, department, designation, salary)
SELECT 'Aadvita Joshi', 'Finance', 'Financial Analyst', 75000
WHERE NOT EXISTS (SELECT 1 FROM employees WHERE id = 3);