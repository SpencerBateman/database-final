module.exports = (app) => {

  let MatchModel = require('../model/match/match.model.server');

  app.post('/api/match/getList', getListOfMatches);

  function getListOfMatches(req, res) {
    let list = req.body;

    MatchModel
      .getListFromIds(list)
      .then(function (matches) {
        console.log(matches);
        res.json(matches);
      });
  }
}
