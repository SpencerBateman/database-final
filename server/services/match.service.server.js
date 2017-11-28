module.exports = (app) => {

  let matchModel = require('../model/match/match.model.server')
  let userModel = require('../model/user/user.model.server');

  app.post('/api/match', createMatch);

  function createMatch(req, res) {
    let users = req.body;
    let user1 = users.user1;
    let user2 = users.user2;
    matchModel().createMatch(user1, user2).then((_match) => {
      res.json(_match);
    });
  }
}
