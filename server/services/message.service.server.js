module.exports = (app) => {

  let MessageModel = require('../model/message/message.model.server');
  let MatchModel = require('../model/match/match.model.server');

  app.post('/api/message', createMessage);
  app.get('/api/message/:matchId', getMessagesById);

  async function createMessage(req, res) {
    let message = req.body;
    let matchId = message.match;

    let created_message = await MessageModel.createMessage(message);

    let match = await MatchModel.getMatchById(matchId);

    if (match.conversation != null) {
      match.conversation.push(created_message);
    } else {
      match.conversation = [created_message];
    }

    let new_match = await MatchModel.updateMatch(matchId, match);

    return res.json(created_message);
  }

  function getMessagesById(req, res) {
    console.log('hi2');
    var matchId = req.params['matchId'];
    MessageModel
      .getMessagesById(matchId)
      .then(function (message) {
        res.json(message);
      });

  }



}
