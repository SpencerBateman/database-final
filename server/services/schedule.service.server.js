module.exports = function(app) {

  let scheduleModel = require('../model/schedule/schedule.model.server');
  let dayModel = require('../model/day/day.model.server');

  app.post('/api/schedule', createSchedule);
  app.get('/api/schedule/:scheduleId', getScheduleById);
  app.put('/api/schedule/:scheduleId', updateSchedule);

  function updateSchedule(req, res) {
    let schedule = req.body;
    let scheduleId = req.params['scheduleId'];
    scheduleModel
      .updateSchedule(scheduleId, schedule)
      .then(function(schedule) {
        res.json(schedule);
      });
  }

  function createSchedule(req, res) {
    let user = req.body;

    scheduleModel.createSchedule(user).then(function (schedule) {
      res.json(schedule);
    });
  }

  function getScheduleById(req, res) {
    let scheduleId = req.params['scheduleId'];

    scheduleModel
      .getScheduleById(scheduleId)
      .then(function(schedule) {
        res.json(schedule);
      });
  }
}

