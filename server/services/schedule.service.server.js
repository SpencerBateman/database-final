module.exports = function(app) {

  let scheduleModel = require('../model/schedule/schedule.model.server');
  let dayModel = require('../model/day/day.model.server');

  app.post('/api/schedule', createSchedule);
  app.get('/api/schedule/:scheduleId', getScheduleById);

  function createSchedule(req, res) {
    let user = req.body;

    scheduleModel.createSchedule(user).then(function (schedule) {
      res.json(schedule);
    });
  }

  function getScheduleById(req, res) {
    let scheduleId = req.params['scheduleId'];
    console.log(scheduleId);

    scheduleModel
      .getScheduleById(scheduleId)
      .then(function(schedule) {
        console.log('return');
        console.log(schedule);
        res.json(schedule);
      });
  }
}

