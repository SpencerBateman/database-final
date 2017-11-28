module.exports = (app) => {

  let MatchModel = require('../model/match/match.model.server');

  app.post('/api/match/getList', getListOfMatches);
  app.get('/api/match/getMatchById', getMatchById);

  function getListOfMatches(req, res) {
    let list = req.body;

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
}
