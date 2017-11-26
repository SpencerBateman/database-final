module.exports = function(app) {

  let dayModel = require('../model/day/day.model.server');

  app.get('/api/day/:dayId', getDayById);
  app.put('/api/day/:dayId', updateDayById);

  function getDayById(req, res) {
    let dayId = req.params['dayId'];

    dayModel
    .getDayById(dayId)
    .then(function(day) {
      res.json(day);
    });
  }

  function updateDayById(req, res) {
    let dayId = req.params['dayId'];
    let day = req.body;

    dayModel
    .updateDayById(dayId, day)
    .then(function(day) {
      res.json(day);
    });
  }

  function updateUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];

    userModel
      .updateUser(userId, user)
      .then(function(user) {
        res.json(user);
      });
  }
}

