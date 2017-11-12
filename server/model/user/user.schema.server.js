var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  age: String,
  bio: String,
  listOfLiked: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  listOfMatches: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}]
}, {collection: 'user'});

module.exports = UserSchema;

