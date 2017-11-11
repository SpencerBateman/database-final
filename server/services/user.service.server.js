module.exports = function(app) {

  let userModel = require('../model/user/user.model.server');

  app.get('/api/user/:userId', findUserById);
  app.post('/api/user', createUser);

  function findUserById(req, res) {
    var userId = req.params['userId'];

    userModel
    .findUserById(userId)
    .then(function(user) {
      res.json(user);
    });
  }

  function createUser(req, res) {
    var user = req.body;
    console.log(user);
    userModel
    .createUser(user)
    .then(function(user) {
      res.json(user);
    });
  }
}
