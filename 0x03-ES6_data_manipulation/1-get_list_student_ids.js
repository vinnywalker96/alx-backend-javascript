export default function getListStudentIds(arrayOfObjects) {
  if (arrayOfObjects instanceof Array) {
    return arrayOfObjects.map((object) => object.id);
  }
  return [];
}
