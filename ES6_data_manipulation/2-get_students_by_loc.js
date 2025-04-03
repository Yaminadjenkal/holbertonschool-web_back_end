export default function getStudentsByLocation(students, city) {
  // Vérifier si la liste des étudiants est un tableau
  if (!Array.isArray(students)) {
    return [];
  }

  // Utiliser filter pour obtenir les étudiants dans la ville spécifiée
  return students.filter((student) => student.location === city);
}

