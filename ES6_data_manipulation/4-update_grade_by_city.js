export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrer les étudiants par ville
  const studentsInCity = students.filter((student) => student.location === city);

  // Mapper les étudiants pour ajouter ou mettre à jour leur grade
  return studentsInCity.map((student) => {
    // Trouver la nouvelle note dans newGrades
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

    // Retourner l'étudiant avec sa grade (ou "N/A" si non trouvé)
    return {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A',
    };
  });
}

