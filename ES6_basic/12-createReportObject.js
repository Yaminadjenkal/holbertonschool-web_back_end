export default function createReportObject(employeesList) {
  return {
    // Clé 'allEmployees' qui contient tous les départements et leurs employés
    allEmployees: { ...employeesList },

    // Méthode pour obtenir le nombre de départements
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length; // Compte le nombre de clés (départements)
    },
  };
}

