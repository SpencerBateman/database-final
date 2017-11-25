var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  var query = {_id: userId};
  return UserModel.update(query, user);
}

module.exports = UserModel;
