export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees, // Utilisation de noms de propriétés calculées
  };
}

