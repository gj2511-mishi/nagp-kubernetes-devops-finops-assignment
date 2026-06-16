const pool = require("../config/db");

const getEmployees = async () => {
  const [rows] = await pool.query(`
    SELECT
      id,
      name,
      department,
      designation,
      salary
    FROM employees
    ORDER BY id
  `);

  return rows;
};

module.exports = {
  getEmployees,
};
