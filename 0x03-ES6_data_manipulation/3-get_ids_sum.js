export default function getStudentIdsSum(listofStudents) {
  return listofStudents.reduce((sum, item) => sum += item.id, 0);
}
