var mongoose = require('mongoose');

var MatchSchema = require('./match.schema.server');
var MatchModel = mongoose.model('MatchModel', MatchSchema);
var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);
var LocationSchema = require('../location/location.schema.server');
var LocationModel = mongoose.model('LocationModel', LocationSchema);
let ScheduleSchema = require('../schedule/schedule.schema.server');
let ScheduleModel = mongoose.model('ScheduleModel', ScheduleSchema);

MatchModel.createMatch = createMatch;
MatchModel.getListFromIds = getListFromIds;
MatchModel.getMatchById = getMatchById;
MatchModel.updateMatch = updateMatch;

async function updateMatch(matchId, match) {
  let query = {_id: matchId};
  return MatchModel.update(query, match);
}


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

  //let dateLocation = await LocationModel.getAllLocations();
  let time = await ScheduleModel.available(user1, user2);
  let _match = {user1: user1, user2: user2, day: time.dayOfWeek, hour: time.time, user1HasBeenRated: false, user2HasBeenRated: false};
  let dateLocation = await LocationModel.getLocationByTime(time.dayOfWeek, time.time);
  _match.dateLocation = dateLocation.location._id;
  console.log(_match);

  try {
    _match = await MatchModel.create(_match);
  } catch (error) {
    console.error(error);
  }

  try {
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
