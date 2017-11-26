var mongoose = require('mongoose');
var DaySchema = require('./day.schema.server');
var DayModel = mongoose.model("DayModel", DaySchema);

DayModel.createDay = createDay;
DayModel.getDayById = getDayById;
DayModel.updateDayById = updateDayById;

// This is called when a user is created but takes no arguments
// Initializes and empty schedule
function createDay() {

  // An empty day
  let init_day = {
    "_9": false,
    "_10": false,
    "_11": false,
    "_12": false,
    "_13": false,
    "_14": false,
    "_15": false,
    "_16": false,
    "_17": false,
    "_18": false,
    "_19": false,
    "_20": false,
    "_21": false,
  };

  return DayModel.create(init_day);
}

function getDayById(dayId) {
  return DayModel.findOne({_id: dayId});
}

function updateDayById(dayId, day) {
  console.log("day Id");
  console.log(dayId);

  console.log("day");
  console.log(day);
  var query = {_id: dayId};
  return DayModel.update(query, day);
}

function updateUser(userId, user) {
  var query = {_id: userId};
  return UserModel.update(query, user);
}

module.exports = DayModel;

