var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  age: String
}, {collection: 'user'});

module.exports = UserSchema;

