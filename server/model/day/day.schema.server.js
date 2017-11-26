// This model is modeling someone's schedule over a day
// The hours are expressed in military time to prevent confusion
// The number represents the start time, so for example if 9 and 10 are set
// to true and 11 is set to false that would mean that the user is available
// from 9:00am to 10:59pm and they would not be available at 11

var mongoose = require('mongoose');
var DaySchema = mongoose.Schema ({
  _9: Boolean,
  _10: Boolean,
  _11: Boolean,
  _12: Boolean,
  _13: Boolean,
  _14: Boolean,
  _15: Boolean,
  _16: Boolean,
  _17: Boolean,
  _18: Boolean,
  _19: Boolean,
  _20: Boolean,
  _21: Boolean

}, {collection: 'day'});

module.exports = DaySchema;
