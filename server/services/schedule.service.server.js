module.exports = function(app) {

  let scheduleModel = require('../model/schedule/schedule.model.server');
  let dayModel = require('../model/day/day.model.server');

  app.post('/api/scheduleUser', createScheduleForUser);
  app.post('/api/scheduleLocation', createScheduleForLocation);
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

  async function createScheduleForUser(req, res) {
    let user = req.body;
    let schedule = await scheduleModel.createScheduleForUser(user);
    return res.json(user);
  }

  async function createScheduleForLocation(req, res) {
    let location = req.body;
    let schedule = await scheduleModel.createScheduleForLocation(location);
    return res.json(location);
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
