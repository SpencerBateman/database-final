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
    console.log(monday);
  } catch (error) {
    console.error(error);
  }

  let tuesday;
  try {
    tuesday = await DayModel.createDay();
    console.log(tuesday);
  } catch (error) {
    console.error(error);
  }

  let wednesday;
  try {
    wednesday = await DayModel.createDay();
    console.log(wednesday);
  } catch (error) {
    console.error(error);
  }

  let thusrday;
  try {
    thusrday = await DayModel.createDay();
    console.log(thusrday);
  } catch (error) {
    console.error(error);
  }

  let friday;
  try {
    friday = await DayModel.createDay();
    console.log(friday);
  } catch (error) {
    console.error(error);
  }

  let saturday;
  try {
    saturday = await DayModel.createDay();
    console.log(saturday);
  } catch (error) {
    console.error(error);
  }

  let sunday;
  try {
    sunday = await DayModel.createDay();
    console.log(sunday);
  } catch (error) {
    console.error(error);
  }

  console.log('init empty schedule');
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


// DayModel.create(blank_day, function(err, mon) {
//   console.log('mon');
//   console.log(mon);
//
//   DayModel.create(blank_day, function(err, tue) {
//     console.log('tue');
//     console.log(tue);
//
//     DayModel.create(blank_day, function(err, wed) {
//       console.log('wed');
//       console.log(wed);
//
//       DayModel.create(blank_day, function(err, thu) {
//         console.log('thu');
//         console.log(thu);
//
//         DayModel.create(blank_day, function(err, fri) {
//           console.log('fri');
//           console.log(fri);
//
//           DayModel.create(blank_day, function(err, sat) {
//             console.log('sat');
//             console.log(sat);
//
//             DayModel.create(blank_day, function(err, sun) {
//               console.log('sun');
//               console.log(sun);
//
//               // An Empty Schedule
//               emptySchedule = {
//                 "_user": userId,
//                 mon: mon,
//                 tue: tue,
//                 wed: wed,
//                 thu: thu,
//                 fri: fri,
//                 sat: sat,
//                 sun: sun
//               };
//               console.log('');
//               console.log('');
//               console.log('internal schedule creation');
//               console.log('');
//               console.log('');
//               console.log(emptySchedule);
//               return ScheduleModel.create(emptySchedule);
//             });
//             console.log('out');
//           });
//           console.log('out');
//         });
//         console.log('out');
//       });
//       console.log('out');
//     });
//     console.log('out');
//   });
//   console.log('out');
// }).then(function () {
//   console.log('we are out');
// });


// });
//
// })).exec().then(function () {
//   // An Empty Schedule
//   emptySchedule = {
//     "_user": userId,
//     mon: mon,
//     tue: tue,
//     wed: wed,
//     thu: thu,
//     fri: fri,
//     sat: sat,
//     sun: sun
//   };
//   console.log('');
//   console.log('');
//   console.log('internal schedule creation');
//   console.log('');
//   console.log('');
//   console.log(emptySchedule);
//   return ScheduleModel.create(emptySchedule);
// });
// console.log(response);

function getScheduleById(scheduleId) {
  console.log(scheduleId);
  return ScheduleModel.findOne({_id: scheduleId});
}

module.exports = ScheduleModel;


//   .exec().then(DayModel.create(blank_day, function (err, wed) {
//   console.log('wed');
//   console.log(wed);
// })).exec().then(DayModel.create(blank_day, function (err, thu) {
//   console.log('thu');
//   console.log(thu);
// })).exec().then(DayModel.create(blank_day, function (err, fri) {
//   console.log('fri');
//   console.log(fri);
// })).exec().then(DayModel.create(blank_day, function (err, sat) {
//   console.log('sat');
//   console.log(sat);
// })).exec().then(DayModel.create(blank_day, function (err, sun) {
//   console.log('sun');
//   console.log(sun);
