var mongoose = require('mongoose');
var ScheduleSchema = require('./schedule.schema.server');
var ScheduleModel = mongoose.model("ScheduleModel", ScheduleSchema);
var DaySchema = require('../day/day.schema.server');
var DayModel = mongoose.model("DayModel", DaySchema);

ScheduleModel.createScheduleForUser = createScheduleForUser;
ScheduleModel.createScheduleForLocation = createScheduleForLocation;
ScheduleModel.getScheduleById = getScheduleById;
ScheduleModel.updateSchedule = updateSchedule;
ScheduleModel.available = available;

// returns the user with their available time added to their object.
async function available(user1, user2) {
  let sche1 = user1.schedule;
  let sche2 = user2.schedule;

  let schedule1;
  let schedule2;

  try {
    schedule1 = await ScheduleModel.getScheduleById(sche1);
  } catch (error) {
    console.log(error);
  }

  try {
    schedule2 = await ScheduleModel.getScheduleById(sche2);
  } catch (error) {
    console.log(error);
  }

  let monday1 = await DayModel.getDayById(schedule1.mon);
  let monday2 = await DayModel.getDayById(schedule2.mon);
  let mondayTime = await getAvailableHour(monday1, monday2);
  if (mondayTime != null) {
    console.log({dayOfWeek: "monday", time: mondayTime});
    return {dayOfWeek: "monday", time: mondayTime, user: user2}; // and something
  }

  let tuesday1  = await DayModel.getDayById(schedule1.tue);
  let tuesday2  = await DayModel.getDayById(schedule2.tue);
  let tuesdayTime = await getAvailableHour(tuesday1, tuesday2);
  if (tuesdayTime != null) {
    console.log({dayOfWeek: "tuesday", time: tuesdayTime});
    return {dayOfWeek: "tuesday", time: tuesdayTime, user: user2}; // and something
  }

  let wednesday1 = await DayModel.getDayById(schedule1.wed);
  let wednesday2 = await DayModel.getDayById(schedule2.wed);
  let wednesdayTime = await getAvailableHour(wednesday1, wednesday2);
  if (wednesdayTime != null) {
    console.log({dayOfWeek: "wednesday", time: wednesdayTime});
    return {dayOfWeek: "wednesday", time: wednesdayTime, user: user2};
  }

  let thursday1 = await DayModel.getDayById(schedule1.thu);
  let thursday2 = await DayModel.getDayById(schedule2.thu);
  let thursdayTime = await getAvailableHour(thursday1, thursday2);
  if (thursdayTime != null) {
    console.log({dayOfWeek: "thursday", time: thursdayTime});
    return {dayOfWeek: "thursday", time: thursdayTime, user: user2};
  }

  let friday1 = await DayModel.getDayById(schedule1.fri);
  let friday2 = await DayModel.getDayById(schedule2.fri);
  let fridayTime = await getAvailableHour(friday1, friday2);
  if (fridayTime != null) {
    console.log({dayOfWeek: "friday", time: fridayTime});
    return {dayOfWeek: "friday", time: fridayTime, user: user2};
  }

  let saturday1 = await DayModel.getDayById(schedule1.sat);
  let saturday2 = await DayModel.getDayById(schedule2.sat);
  let saturdayTime = await getAvailableHour(saturday1, saturday2);
  if (saturdayTime != null) {
    console.log({dayOfWeek: "saturday", time: saturdayTime});
    return {dayOfWeek: "saturday", time: saturdayTime, user: user2};
  }

  let sunday1 = await DayModel.getDayById(schedule1.sun);
  let sunday2 = await DayModel.getDayById(schedule2.sun);
  let sundayTime = await getAvailableHour(sunday1, sunday2);
  if (sundayTime != null) {
    console.log({dayOfWeek: "sunday", time: sundayTime});
    return {dayOfWeek: "sunday", time: sundayTime, user: user2};
  }
  return null;

}


async function getAvailableHour(day1, day2) {
  if (day1._9 && day2._9) {
    return "9";
  } else if (day1._10 && day2._10) {
    return "10"
  } else if (day1._10 && day2._10) {
    return "11"
  } else if (day1._10 && day2._10) {
    return "12"
  } else if (day1._10 && day2._10) {
    return "13"
  } else if (day1._10 && day2._10) {
    return "14"
  } else if (day1._10 && day2._10) {
    return "15"
  } else if (day1._10 && day2._10) {
    return "16"
  } else if (day1._10 && day2._10) {
    return "17"
  } else if (day1._10 && day2._10) {
    return "18"
  } else if (day1._10 && day2._10) {
    return "19"
  } else if (day1._10 && day2._10) {
    return "20"
  } else if (day1._10 && day2._10) {
    return "21"
  }
  return null;
}

// Initializes and empty schedule

async function createScheduleForUser(userId) {
  return createSpecifiedSchedule(userId, 'user');

}

async function createScheduleForLocation(locationId) {
  return createSpecifiedSchedule(locationId, 'location');

}


async function createSpecifiedSchedule(id, type) {
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

let emptySchedule;
 if (type == 'user') {
    emptySchedule = {
    "_user": id,
    mon: monday,
    tue: tuesday,
    wed: wednesday,
    thu: thusrday,
    fri: friday,
    sat: saturday,
    sun: sunday
  };
  } else {
    emptySchedule = {
    "_location": id,
    mon: monday,
    tue: tuesday,
    wed: wednesday,
    thu: thusrday,
    fri: friday,
    sat: saturday,
    sun: sunday
  };
  }

  return ScheduleModel.create(emptySchedule);
}

function updateSchedule(scheduleId, schedule) {
  let query = {_id: scheduleId};
  console.log(scheduleId);
  console.log(schedule);
  return ScheduleModel.update(query, schedule);
}

function getScheduleById(scheduleId) {
  return ScheduleModel.findOne({_id: scheduleId});
}

module.exports = ScheduleModel;
