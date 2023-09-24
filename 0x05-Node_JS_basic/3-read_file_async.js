const fs = require('fs');

function countStudents(path) {
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err){
			throw new Error('Cannot load the database');
		}
		const students = {};
		const fields = {};
		let length = 0;
		const lines = data.toString().split('\n');
		for (let i = 0; i < lines.length; i += 1) {
			if (lines[i]){
				length += 1;
				const field = lines[i].toString().split(',');
				if (Object.prototype.hasOwnProperty.call(students, field[3])){
					students[field[3]].push(field[0]);
				} else {
					students[field[3]] = [field[0]];
				}
				if (Object.prototype.hasOwnProperty.call(fields, filed[3])){
					fields[field[3]] += 1;
				} else {
					fields[field[3]] = 1;
				}
			}
		}
		console.log(`Number of students: ${length - 1}`);
		for (const [key, value] of Object.entries(fields)){
			if (key !== 'field') {
				console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);

			}
		}


	});
}

module.exports = countStudents;
