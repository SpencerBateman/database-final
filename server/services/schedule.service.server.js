module.exports = function(app) {

  let scheduleModel = require('../model/schedule/schedule.model.server');

  // Returns the user with the given id
  app.get('/api/user/:userId', getUserById);
}

