const path = require('path');

class MainController {
  constructor() {}

  getIndex(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/index.html'));
  }

  getMenu(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/menu.html'));
  }

  getRecomendation(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/recomendation.html'));
  }

  getReservation(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/reservations.html'));
  }

  getFeedback(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/feedback.html'));
  }
}

module.exports = MainController;
