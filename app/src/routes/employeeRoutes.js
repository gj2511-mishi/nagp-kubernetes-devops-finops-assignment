const express = require("express");
const router = express.Router();

const { getEmployees } = require("../services/employeeService");

router.get("/employees", async (req, res) => {
  try {
    const employees = await getEmployees();

    res.status(200).json(employees);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch employees",
    });
  }
});

module.exports = router;
