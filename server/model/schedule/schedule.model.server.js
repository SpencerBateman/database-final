var mongoose = require('mongoose');
var ScheduleSchema = require('./schedule.schema.server');
var ScheduleModel = mongoose.model("ScheduleModel", ScheduleSchema);
var DaySchema = require('../day/day.schema.server');
var DayModel = mongoose.model("DayModel", DaySchema);

ScheduleModel.createSchedule = createSchedule;
ScheduleModel.getScheduleById = getScheduleById;

// Initializes and empty schedule
async function createSchedule(userId) {

  let monday;
  try {
    monday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let tuesday;
  try {
    tuesday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let wednesday;
  try {
    wednesday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let thusrday;
  try {
    thusrday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let friday;
  try {
    friday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let saturday;
  try {
    saturday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let sunday;
  try {
    sunday = await DayModel.createDay();
  } catch (error) {
    console.error(error);
  }

  let emptySchedule = {
    "_user": userId,
    mon: monday,
    tue: tuesday,
    wed: wednesday,
    thu: thusrday,
    fri: friday,
    sat: saturday,
    sun: sunday
  };

  return ScheduleModel.create(emptySchedule);
}

function getScheduleById(scheduleId) {
  console.log(scheduleId);
  return ScheduleModel.findOne({_id: scheduleId});
}

module.exports = ScheduleModel;
