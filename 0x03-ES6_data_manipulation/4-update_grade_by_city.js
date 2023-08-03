export default function updateStudentGradeByCity(listofStudents, city, newGrades) {
  const studentsByCity = listofStudents.filter((student) => student.location === city);
  const studentsWithGrades = studentsByCity.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (studentGrade.length) {
      return { ...student, grade: studentGrade[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return studentsWithGrades;
}
