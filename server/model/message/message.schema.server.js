var mongoose = require('mongoose');
var MessageSchema = mongoose.Schema ({
  match: {type: mongoose.Schema.Types.ObjectId, ref: 'MatchModel'},
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  timestamp: { type : Date, default: Date.now },
  body: String,

}, {collection: 'convo'});

module.exports = MessageSchema;
