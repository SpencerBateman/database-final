var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  age: Number,
  bio: String,
  // This needs to have a new datatype
  photo: String,
  gender: String,
  lookingFor: String,
  schedule: {type: mongoose.Schema.Types.ObjectId, ref: 'ScheduleModel'},
  matches: [{type: mongoose.Schema.Types.ObjectId, ref: 'MatchModel'}],
  likedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  rating: Number,
  timesRated: Number
}, {collection: 'user'});

module.exports = UserSchema;

