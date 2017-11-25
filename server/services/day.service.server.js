module.exports = function(app) {

  let dayModel = require('../model/day/day.model.server');

  app.post('/api/day', createDay);

  function createDay(req, res) {
    var day = req.body;
    dayModel.createDay(day).then(function(day) {
      res.json(day);
    });
  }
}

