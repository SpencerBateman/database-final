// This model is modeling someone's schedule over a day
// The hours are expressed in military time to prevent confusion
// The number represents the start time, so for example if 9 and 10 are set
// to true and 11 is set to false that would mean that the user is available
// from 9:00am to 10:59pm and they would not be available at 11

var mongoose = require('mongoose');
var DaySchema = mongoose.Schema ({
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

}, {collection: 'day'});

module.exports = DaySchema;


