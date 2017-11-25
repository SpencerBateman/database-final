var mongoose = require('mongoose');
var ScheduleSchema = require('./schedule.schema.server');
var ScheduleModel = mongoose.model("ScheduleModel", ScheduleSchema);
var DaySchema = require('../day/day.schema.server');
var DayModel = mongoose.model("DayModel", DaySchema);

ScheduleModel.createSchedule = createSchedule;
ScheduleModel.getUserSchedule = getUserSchedule;

// This is called when a user is created but takes no arguments
// Initializes and empty schedule
function createSchedule(user) {
  let blank_day = {
    9: Boolean,
    10: Boolean,
    11: Boolean,
    12: Boolean,
    13: Boolean,
    14: Boolean,
    15: Boolean,
    16: Boolean,
    17: Boolean,
    18: Boolean,
    19: Boolean,
    20: Boolean,
    21: Boolean
  };
  return DayModel.create(blank_day, function(err, mon) {
    return DayModel.create(blank_day, function(err, tue) {
      return DayModel.create(blank_day, function(err, wed) {
        return DayModel.create(blank_day, function(err, thu) {
          return DayModel.create(blank_day, function(err, fri) {
            return DayModel.create(blank_day, function(err, sat) {
              return DayModel.create(blank_day, function(err, sun) {
                // An Empty Schedule
                let emptySchedule = {
                  "_user": user._id,
                  mon: mon,
                  tue: tue,
                  wed: wed,
                  thu: thu,
                  fri: fri,
                  sat: sat,
                  sun: sun
                };
                return ScheduleModel.create(emptySchedule);
              });
            });
          });
        });
      });
    });
  });
}

function getUserSchedule() {

}

module.exports = ScheduleModel;
