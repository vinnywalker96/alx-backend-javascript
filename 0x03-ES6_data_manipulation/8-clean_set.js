export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const newSet = [];
  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      newSet.push(item.slice(startString.length));
    }
  });
  return newSet.join('-');
}
