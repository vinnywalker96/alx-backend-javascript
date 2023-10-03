const readDatabse = require('../utils.js');

export default class StudentController {
	static getAllStudents(request, response) {
	  readDatabase(process.argv[2].toString()).then((students) => {
		  const output = [];
		  output.push('This is the list of our students');
		  const keys = Object.keys(students);
		  keys.sort();
		  for (let i = 0; i < keys.length; i++) {
			  output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
		  }
		  response.status(200).send(output.join('\n'));
	  }).catch(() => {
		  response.status(500).send('Cannot load database');
	  });

	}

	static getAllStudentsByMajor(request, response) {
		const fields = request.params.major;
		readDatabase(process.argv[2].toString()).then((students) => {
			if(!(fields in students)){
				response.status(500).send('Major parameter must be CS or SWE');
			} else {
				response.status(200).send(`List: ${students[field].join(', ')}`);
			}
		}).catch(() => {
			response.status(500).send('Cannot load databasse');
		});

	}
}
