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
  app.delete('/api/user/like/:userId', removeUser);

  async function like(req, res) {
    let userId = req.params['userId'];
    let _match = req.body;


    let user = await userModel.findUserById(userId);

    if (user.likes == null) {
      user.likes = [_match];
    } else {
      user.likes.push(_match);
    }


    if (_match.likedBy == null) {
      _match.likedBy = [user];
    } else {
      _match.likedBy.push(user);
    }



    //updates users that with the like and liked settings.
    userModel.updateUser(userId, user).then(() => {
      userModel.updateUser(_match._id, _match).then(() => {
        if (_match.likes != null && _match.likes.includes(userId)) {
          matchModel.createMatch(userId, _match._id).then((new_match) => {
            return res.json(new_match);
          });
        } else {
          return res.json({});
        }
      });
    });
  }

  async function getPotentialMatches(req, res) {
    let userId = req.params['userId'];

    let user = await userModel.findUserById(userId);

    let users = await userModel.findAllUser();

    let potential = users.filter((u) => {
      // this variable represents whether the potential
      // match has already been liked

      let alreadyLiked = false;

      // if the user has no likes don't worry about it

      if (user.likes != null) {

        alreadyLiked = user.likes.indexOf(u._id) != -1;
      }

      // This is a big filter that takes into account
      // everything about the final result of users.
      return u.gender == user.lookingFor &&
        u.lookingFor == user.gender &&
        u._id != user._id && !alreadyLiked;
    });

    // returns a pair of the user and a day and an hour.
    let final = potential.map(async (u) => {
      let availability = await scheduleModel.available(user, u);
      return(availability);
    });

    let result = await Promise.all(final);

    result = result.filter((u) => {
      return u;
    });

    res.json(result);
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
          .createScheduleForUser(user._id)
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

  function removeUser(req, res) {
    var userId = req.body;
    UserModel.removeUser(userId).then(function() {
      res.json();
    });
  }
}
