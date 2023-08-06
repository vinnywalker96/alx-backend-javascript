export default function hasValuesFromArray(set, array) {
  if (set instanceof Set) {
    return set.has(array);
  }
  return 'false';
}
