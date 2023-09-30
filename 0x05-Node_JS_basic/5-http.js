const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    const fileContents = fs.readFileSync('database.csv', 'utf-8');
    const lines = fileContents.toString().split('\n');
    const fields = {};
    let length = 0;
    lines.forEach((line) => {
      if (line) {
        length += 1;
        const field = line.toString().split(',');
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    });
    const size = length - 1;
    res.write(`Number of students: ${size}\n`);
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        res.write(
          `Number of students in ${key}: ${value}. List: ${fields.students}\n`,
        );
      }
    }
    res.end();
  }
});

server.listen(port, hostname, () => {});

module.exports = server;
