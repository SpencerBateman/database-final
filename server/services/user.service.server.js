module.exports = (app) => {

  let userModel = require('../model/user/user.model.server');
  let scheduleModel = require('../model/schedule/schedule.model.server');
  let matchModel = require('../model/match/match.model.server');

  app.get('/api/user/:userId', getUserById);
  app.put('/api/user/:userId', updateUser);
  app.get('/api/user', findAllUser);
  app.post('/api/user', createUser);
  app.get('/api/user/suitors/:userId', getPotentialMatches);
  app.put('/api/user/like/:userId', like);

  function like(req, res) {
    let userId = req.params['userId'];
    let _match = req.body;
    console.log('1');

    userModel.findUserById(userId).then((user) => {
      console.log('2');

        //if the array of likes is empy

      console.log(user);
        if (user.like == null) {
          user.likes = [_match];
        } else {
          user.likes.push(_match);
        }
      console.log('3');


      if (_match.likedBy == null) {
          _match.likedBy = [user];
        } else {
          _match.likedBy.push(user);
        }

      console.log('4');


      //updates users that with the like and liked settings.
        userModel.updateUser(userId, user).then(() => {
          userModel.updateUser(_match._id, _match).then(() => {
            if (_match.likes != null && _match.likes.includes(userId)) {
              matchModel.createMatch(userId, _match._id).then(() => {
              });
            }
          });
        });
      });
    return res.json({});
  }

  function getPotentialMatches(req, res) {
    let userId = req.params['userId'];
    userModel.findUserById(userId).then((user) => {
      userModel.findAllUser().then((users) => {

        let potential = users.filter((u) => {
          // this variable represents whether the potential
          // match has already been liked

          let alreadyLiked = false;

          // if the user has no likes don't worry about it

          if (user.likes != null) {

            alreadyLiked = user.likes.indexOf(u._id) != -1;
            console.log(alreadyLiked);
          }

          // This is a big filter that takes into account
          // everything about the final result of users.
          return u.gender == user.lookingFor &&
            u.lookingFor == user.gender &&
            u._id != user._id && !alreadyLiked;
        });
        console.log(potential);
        res.json(potential);
      });
    });
  }

  function updateUser(req, res) {
    let user = req.body;
    let userId = user._id;
    userModel
      .updateUser(userId, user)
      .then(function (user) {
        res.json(user);
      });
  }

  // Returns the user with the given id
  function getUserById(req, res) {
    var userId = req.params['userId'];

    userModel
      .findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  // create user
  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {

        scheduleModel
          .createSchedule(user._id)
          .then(function (schedule) {

            user.schedule = schedule;

            userModel
              .updateUser(user._id, user)
              .then(function (user) {

                res.json(user);
              });
          });
        res.json(user);
      });
  }

  function findAllUser(req, res) {
    var email = req.query['email'];
    var password = req.query['password'];

    if (email && password) {
      userModel
        .findUserByCredentials(email, password)
        .then(function (user) {
          res.json(user);
        });
    } else if (email) {
      userModel
        .findUserByEmail(email)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
  }
}
