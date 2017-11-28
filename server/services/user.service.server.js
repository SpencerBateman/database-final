module.exports = (app) => {

  let userModel = require('../model/user/user.model.server');
  let scheduleModel = require('../model/schedule/schedule.model.server');
  let matchModel = require('../model/match/match.model.server');

  app.get('/api/user/:userId', getUserById);
  app.put('/api/user/:userId', updateUser);
  app.get('/api/user', findAllUser);
  app.get('/api/user/:userId/swipe', getAvailableUsers);
  app.put('/api/user/:userId/like', likeUser);
  app.post('/api/user', createUser);
  app.get('/api/user/suitors/:userId', getPotentialMatches);
  app.put('/api/user/like/:userId', like);

  function like(req, res) {
    let userId = req.params['userId'];
    let _match = req.body;
    userModel
      .findUserById(userId)
      .then((user) => {
        //
        //if the array of likes is empy
        if (!user.like) {
          user.likes = [_match];
        } else {
          user.likes.push(_match);
        }
        if (!_match.likedBy) {
          _match.likedBy = [user];
        } else {
          _match.likedBy.push(user);
        }

        //updates users that with the like and liked settings.
        userModel
          .updateUser(userId, user).then((final_user1) => {
            userModel.updateUser(_match._id, _match).then((final_user2) => {
              if (_match.likes != null && _match.likes.includes(userId)) {
                matchModel.createMatch(userId, _match._id).then(() => {
                });
              }
            });
          });
      });
  }

  function getPotentialMatches(req, res) {
    let userId = req.params['userId'];
    userModel
      .findUserById(userId)
      .then((user) => {
        userModel.findAllUser()
          .then((users) => {
            let potential = users.filter(function (u) {
              // this variable represents whether the potential
              // match has already been liked

              let alreadyLiked = false;

              // if the user has no likes don't worry about it
              if (!user.likes) {
              // if the user does have a list of likes check
              // to see if they are already liked
              } else {
                alreadyLiked = !user.likes.includes(u);
              }

              // This is a big filter that takes into account
              // everything about the final result of users.
              return u.gender == user.lookingFor &&
                u.lookingFor == user.gender &&
                u._id != user._id && !alreadyLiked;
            });

            res.json(potential);

          });
      });
  }

  function updateUser(req, res) {
    let user = req.body;
    let userId = user._id;
    userModel
      .updateUser(userId, user)
      .then(function(user) {
        res.json(user);
      });
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
    userModel
      .createUser(user)
      .then(function(user) {

        scheduleModel
          .createSchedule(user._id)
          .then(function(schedule) {

            user.schedule = schedule;

            userModel
              .updateUser(user._id, user)
              .then(function(user) {

                res.json(user);
              });
          });
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
