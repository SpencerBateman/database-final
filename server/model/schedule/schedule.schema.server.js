var mongoose = require('mongoose');
var ScheduleSchema = mongoose.Schema ({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  _location: {type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'},
  mon: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'},
  tue: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'},
  wed: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'},
  thu: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'},
  fri: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'},
  sat: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'},
  sun: {type: mongoose.Schema.Types.ObjectId, ref: 'DayModel'}

}, {collection: 'schedule'});

module.exports = ScheduleSchema;
