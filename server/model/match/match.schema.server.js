var mongoose = require('mongoose');
var MatchSchema = mongoose.Schema ({
  user1: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  user2: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  dateLocation: {type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'},
  conversation: [{type: mongoose.Schema.Types.ObjectId, ref: 'MessageModel'}]

}, {collection: 'match'});

module.exports = MatchSchema;

