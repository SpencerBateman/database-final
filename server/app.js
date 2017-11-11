module.exports = function (app) {
  var db = require('./model/models.server.js');
  require('./services/user.service.server.js')(app);
};

