class AppController {
  static getHome(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
