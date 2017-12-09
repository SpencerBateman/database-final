var mongoose = require('mongoose');

var LocationSchema = require('./location.schema.server');
var LocationModel = mongoose.model('LocationModel', LocationSchema);
var ScheduleSchema = require('../schedule/schedule.schema.server');
var ScheduleModel = mongoose.model('ScheduleModel', ScheduleSchema);
var DayModel = mongoose.model('DayModel', DaySchema);
var DaySchema = require('../day/day.schema.server');

LocationModel.createLocation = createLocation;
LocationModel.updateLocation = updateLocation;
LocationModel.findLocation = findLocation;
LocationModel.getAllLocations = getAllLocations;
LocationModel.getLocationByTime = getLocationByTime;
LocationModel.getLocation = getLocation;

async function createLocation() {
  return LocationModel.create({});
}

async function updateLocation(locationId, location) {
  var query = {_id: locationId};
  return LocationModel.update(query, location);
}

async function findLocation(locationId) {
  return LocationModel.findOne({_id: locationId});
}

async function getAllLocations() {
  return LocationModel.distinct("_id");
}

async function getLocationByTime(day, hour) {
  let locations = await LocationModel.distinct("_id");

  // returns a pair of the location and a day and an hour.
  let final = locations.map(async (l) => {
    let actualLocation = await LocationModel.findLocation(l);
    console.log(actualLocation);
    let availability = await LocationModel.getLocation(actualLocation, day, hour);
    return(availability);
  });

  let result = await Promise.all(final);
  result = result.filter(function(n){ return n != null });

  console.log(result);
  console.log(day);
  console.log(hour);
  return result[0];
}

async function getLocation(location, day, hour) {
  let avaiable; //the response that determines whether there is an available time
  let schedule = await ScheduleModel.getScheduleById(location.schedule);
  console.log(schedule);
  let dayId;
  switch (day) {
    case "monday":
      dayId = await schedule.mon;
      break;
    case "tuesday":
      dayId = await schedule.tue;
      break;
    case "wednesday":
      dayId = await schedule.wed;
      break;
    case "thusrday":
      dayId = await schedule.thu;
      break;
    case "friday":
      dayId = await schedule.fri;
      break;
    case "saturday":
      dayId = await schedule.sat;
      break;
    case "sunday":
      dayId = await schedule.sun;
      break;
  }

  let locDay = await DayModel.getDayById(dayId);
  console.log('loc day!');
  console.log(locDay);
  switch (hour) {
    case "9":
      avaiable = locDay._9;
      break;
    case "10":
      avaiable = locDay._10;
      break;
    case "11":
      avaiable = locDay._11;
      break;
    case "12":
      avaiable = locDay._12;
      break;
    case "13":
      avaiable = locDay._13;
      break;
    case "14":
      avaiable = locDay._14;
      break;
    case "15":
      avaiable = locDay._15;
      break;
    case "16":
      avaiable = locDay._16;
      break;
    case "17":
      avaiable = locDay._17;
      break;
    case "18":
      avaiable = locDay._18;
      break;
    case "19":
      avaiable = locDay._19;
      break;
    case "20":
      avaiable = locDay._20;
      break;
    case "21":
      avaiable = locDay._21;
      break;
  }
  if (avaiable) {
    return {location: location, day: day, hour: hour};
  } else {
    return null;
  }
}

module.exports = LocationModel;
