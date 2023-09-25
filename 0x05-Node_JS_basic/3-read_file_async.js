const fs = require('fs');

function countStudents(path){
	fs.readFile(path, 'utf-8', (err, data) => {
		if(err){
			throw new Error('Cannot load the database');
		} else {
			const lines = data.split('\n');
			for (const line of lines){
				console.log(line);
			}
		}
	});
}

module.exports = countStudents;
