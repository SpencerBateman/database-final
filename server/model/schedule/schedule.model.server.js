var mongoose = require('mongoose');
var ScheduleSchema = require('./schedule.schema.server');
var ScheduleModel = mongoose.model("ScheduleModel", ScheduleSchema);

ScheduleModel.createSchedule = createSchedule;
ScheduleModel.getUserSchedule = getUserSchedule;

// This is called when a user is created but takes no arguments
// Initializes and empty schedule
function createSchedule() {

  // An empty day
  let day = {
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

  // An Empty Schedule
  let emptySchedule = {
    "mon": day,
    "tue": day,
    "wed": day,
    "thu": day,
    "fri": day,
    "sat": day,
    "sun": day
  };

  return ScheduleModel.create(emptySchedule);
}
