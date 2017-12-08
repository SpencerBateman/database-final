module.exports = (app) => {

  let MatchModel = require('../model/match/match.model.server');
  let UserModel = require('../model/user/user.model.server');

  app.post('/api/match/getList', getListOfMatches);
  app.get('/api/match/:matchId', getMatchById);
  app.post('/api/match/users/:userId', getUserListFromMatches);
  app.post('/api/match/rating', createRating);

  function getListOfMatches(req, res) {
    let list = req.body;
    console.log(list);

    MatchModel
      .getListFromIds(list)
      .then(function (matches) {
        console.log(matches);
        res.json(matches);
      });
  }

  function getMatchById(req, res) {
    let matchId = req.params['matchId'];

    MatchModel.getMatchById(matchId).then((match) => {
      res.json(match);
    });
  }

  async function getUserListFromMatches(req, res) {
    let matchIds = req.body;
    let userId = req.params['userId'];
    let matches = await MatchModel.getListFromIds(matchIds);
    let final = matches.map(async (m) => {
      if (m.user1 == userId) {
        return await UserModel.findUserById(m.user2);
      } else {
        return await UserModel.findUserById(m.user1);
      }
    });

    Promise.all(final).then(function (result) {
      res.json(result);
    });
  }

  async function createRating(req, res) {
    let matchId = req.body['matchId'];
    let otherUserId = req.body['otherUserId'];
    let rating = Number(req.body['rating']);

    let otherUser = await UserModel.findUserById(otherUserId);

    otherUser.rating = (rating + (otherUser.rating * otherUser.timesRated)) / (otherUser.timesRated + 1);
    otherUser.timesRated += 1;
    await UserModel.updateUser(otherUserId, otherUser);

    let match = await MatchModel.getMatchById(matchId);
    if (otherUserId == match.user1) {
      match.user1HasBeenRated = true;
    } else if (otherUserId = match.user2) {
      match.user2HasBeenRated = true;
    }
    console.log(matchId);
    return await MatchModel.updateMatch(matchId, match);
  }
}
