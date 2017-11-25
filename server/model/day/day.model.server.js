var mongoose = require('mongoose');
var DaySchema = require('./day.schema.server');
var DayModel = mongoose.model("DayModel", DaySchema);

DayModel.createDay = createDay;

// This is called when a user is created but takes no arguments
// Initializes and empty schedule
function createDay() {

  // An empty day
  let init_day = {
    "9": false,
    "10": false,
    "11": false,
    "12": false,
    "13": false,
    "14": false,
    "15": false,
    "16": false,
    "17": false,
    "18": false,
    "19": false,
    "20": false,
    "21": false,
  };

  return DayModel.create(init_day);
}

function getUserSchedule() {
}

module.exports = DayModel;

