const getEmployees = async () => {
  return [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      designation: "Developer",
      salary: 80000,
    },
  ];
};

module.exports = {
  getEmployees,
};
