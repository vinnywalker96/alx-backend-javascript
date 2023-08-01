export default function getListStudentsByLocation(arrayOfObjects, city) {
  if (arrayOfObjects instanceof Array) {
    return arrayOfObjects.filter((object) => object.location === city);
  }
  return [];
}
