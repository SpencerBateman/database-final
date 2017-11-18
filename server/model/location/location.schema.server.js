var mongoose = require('mongoose');
var LocationSchema = mongoose.Schema ({
  name: String,
  lat: Number,
  lon: Number,
  schedule: {type: mongoose.Schema.Types.ObjectId, ref: 'ScheduleModel'}

}, {collection: 'location'});

module.exports = LocationSchema;

