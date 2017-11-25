module.exports = function(app) {

  let scheduleModel = require('../model/schedule/schedule.model.server');
  let dayModel = require('../model/day/day.model.server');

  app.post('/api/schedule', createSchedule);

  function createSchedule(req, res) {
    let user = req.body;

    scheduleModel.createSchedule(user).then(function (schedule) {
      res.json(schedule);
    });
  }
}

