var mongoose = require('mongoose');
var LocationSchema = mongoose.Schema ({
  name: String,
  url: String,
  schedule: {type: mongoose.Schema.Types.ObjectId, ref: 'ScheduleModel'}

}, {collection: 'location'});

module.exports = LocationSchema;

