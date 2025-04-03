export default function getListStudentIds(students) {
  // Vérifie si l'argument est un tableau
  if (!Array.isArray(students)) {
    return [];
  }

  // Utilise map pour extraire les ids
  return students.map((student) => student.id);
}

