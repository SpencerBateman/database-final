var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.findAllUser = findAllUser;
UserModel.removeUser = removeUser;

function findAllUser() {
  return UserModel.find();
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function findUserByCredentials(email, password) {
  return UserModel.findOne({email: email, password: password});
}

function updateUser(userId, user) {
  var query = {_id: userId};
  return UserModel.update(query, user);
}

function removeUser(userId) {
  var query = {_id: userId};
  return UserModel.remove(query);
}

module.exports = UserModel;
