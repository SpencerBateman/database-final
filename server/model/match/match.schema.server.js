var mongoose = require('mongoose');
var MatchSchema = mongoose.Schema ({
  user1: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  user2: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  dateLocation: {type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'},
  conversation: [{type: mongoose.Schema.Types.ObjectId, ref: 'MessageModel'}],
  day: String,
  hour: Number,
  user1HasBeenRated: Boolean,
  user2HasBeenRated: Boolean

}, {collection: 'match'});

module.exports = MatchSchema;
