export default function createReportObject(employeesList) {
  const employees = employeesList;
  return {
    allEmployees: employees,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
}
