const fs = require('fs');

function countStudents(path) {
  const students = {};
  const field = {}
  let numberOfStudents = 0;
  try {
	const data = fs.readFileSync(path, 'utf-8');
	const lines = data.toString().split('\n');
	for (let i = 0; i < lines.length; i += 1){
	  if (lines[1]) {
		  numberOfStudents += 1;
		  const field = lines[i].toString().split(',');
		  if (Object.prototype.hasOwnProperty.call(students, field[3])) {
			  students[field[3]].push(field[0]);
		  } else {
			  students[fields

	}
	console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
	} catch(err){
	  throw new Error('Cannot load the database');
	}
}
module.exports = countStudents;

