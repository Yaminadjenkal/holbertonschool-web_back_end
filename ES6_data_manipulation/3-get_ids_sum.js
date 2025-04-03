export default function getStudentIdsSum(students) {
  // Utilisation de reduce pour calculer la somme des ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

