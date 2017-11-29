var mongoose = require('mongoose');

var MessageSchema = require('./message.schema.server');
var MessageModel = mongoose.model('MessageModel', MessageSchema);
var MatchSchema = require('../match/match.schema.server');
var MatchModel = mongoose.model('MatchModel', MatchSchema);
var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

MessageModel.createMessage = createMessage;
MessageModel.getMessagesById = getMessagesById;

async function createMessage(message) {

    try {
      message = await MessageModel.create(message);
    } catch (error) {
      console.error(error);
    }

    return message;
}

async function getMessagesById(matchId) {
  return MessageModel.find({match: matchId});
  // return MessageModel.find({match: matchId}, {sort: {timestamp: -1}});
}


module.exports = MessageModel;
