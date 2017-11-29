var mongoose = require('mongoose');

var MatchSchema = require('./match.schema.server');
var MatchModel = mongoose.model('MatchModel', MatchSchema);
var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

MatchModel.createMatch = createMatch;
MatchModel.getListFromIds = getListFromIds;
MatchModel.getMatchById = getMatchById;


async function getMatchById(matchId) {
  return MatchModel.findOne({_id: matchId});
}

async function getListFromIds(ids) {
  return MatchModel.find({_id: {$in: ids}});
}

async function createMatch(userId1, userId2) {

  let user1;
  let user2;

  try {
    user1 = await UserModel.findUserById(userId1);
  } catch (error) {
    console.error(error);
  }

  try {
    user2 = await UserModel.findUserById(userId2);
  } catch (error) {
    console.error(error);
  }

  let _match = {user1: user1, user2: user2, dateLocation: null, conversation: null};

  try {
    _match = await MatchModel.create(_match);
  } catch (error) {
    console.error(error);
  }

  try {
    console.log('try');
    if (user1.matches != null) {
      user1.matches.push(_match._id);
    } else {
      user1.matches = [_match._id];
    }
    await UserModel.updateUser(userId1, user1);
  } catch (error) {
    console.error(error);
  }

  try {
    if (user2.matches != null) {
      user2.matches.push(_match._id);
    } else {
      user2.matches = [_match._id];
    }
    await UserModel.updateUser(userId2, user2);

  } catch (error) {
    console.error(error);
  }

  return _match;
}

module.exports = MatchModel;
