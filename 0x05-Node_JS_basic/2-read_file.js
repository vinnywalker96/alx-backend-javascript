const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
    lines.filter((line) => line)
      .forEach((line) => {
        length += 1;
        const field = line.toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      });
    const size = length - 1;
    const output = [`Number of students: ${size}`];
    Object.entries(fields).forEach(([key, value]) => {
      if (key !== 'field') {
        output.push(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    });
    return output.join('\n');
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
