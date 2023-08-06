export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    const updatedMap = map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 10);
      }
    });
    return updatedMap;
  }
  return 'Cannot process';
}
