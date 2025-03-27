export default function createIteratorObject(report) {
  const employees = [];
  
  // Parcourir chaque département dans allEmployees
  for (const department of Object.keys(report.allEmployees)) {
    // Ajouter les employés de chaque département au tableau
    employees.push(...report.allEmployees[department]);
  }

  // Retourner un itérateur basé sur le tableau des employés
  return employees[Symbol.iterator]();
}

