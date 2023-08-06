export default function hasValuesFromArray(set, array) {
  if (set instanceof Set) {
    const res = new Set();
    return res.has(...array);
  }
  return 'false';
}
