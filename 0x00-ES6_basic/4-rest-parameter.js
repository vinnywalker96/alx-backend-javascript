export default function returnHowManyArguments (...args) {
  let count = 0;
  for (const arg of args) {
    count++;
  }
  return count;
}
