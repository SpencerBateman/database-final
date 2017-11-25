module.exports = function(app) {

  let userModel = require('../model/user/user.model.server');

  app.get('/api/user/:userId', getUserById);
  app.put('/api/user/:userId', updateUser);
  app.get('/api/user', findAllUser);
  app.get('/api/user/:userId/swipe', getAvailableUsers);
  app.put('/api/user/:userId/like', likeUser);
  app.post('/api/user', createUser);

  function updateUser(req, res) {
    let user = req.body;
    let userId = user._id;
    console.log('updateUser');
    console.log(user);
    console.log(userId);
  }

  // Returns the user with the given id
  function getUserById(req, res) {
    var userId = req.params['userId'];

    userModel
      .findUserById(userId)
      .then(function(user) {
        res.json(user);
      });
  }

  // getAvailableUsers
  // takes a userId and a uses the schedule to return a list
  // of 5 users that match in preference and have a time
  // open in their schedule to meet for a date.
  function getAvailableUsers(req, res) {
  }

  // likeUser
  // takes a user returns void
  // Adds the liked user to the current user's likes list
  // Adds the current user to the liked user's likedBy list
  //
  // When this function is first called it checks to see if
  // the new liked user is a match if so, the relationship is
  // converted to a match
  function likeUser(req, res) {
  }

  // create user
  function createUser(req, res) {
    var user = req.body;
    console.log(user);
    userModel
      .createUser(user)
      .then(function(user) {
        console.log('user created');
        res.json(user);
      });
  }

  function findAllUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if (username && password) {
      userModel
        .findUserByCredentials(username, password)
        .then(function(user) {
          res.json(user);
        });
    } else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function(user) {
          res.json(user);
        });
      return;
    }
  }
}
