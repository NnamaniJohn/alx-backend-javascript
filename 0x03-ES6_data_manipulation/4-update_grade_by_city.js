export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.location === city) {
      const grade = newGrades.find((gradeObj) => gradeObj.id === student.id);
      if (grade) {
        return { ...student, grade: grade.grade };
      }
    }
    return student;
  });
}
