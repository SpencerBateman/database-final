var mongoose = require('mongoose');
var MatchSchema = require('./match.schema.server');
var MatchModel = mongoose.model("MatchModel", MatchSchema);
var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

MatchModel.createMatch = createMatch;

function createMatch(userId1, userId2) {
  let _match = {user1: userId1, user2: userId2};
  UserModel.findUserById(userId1).then((user1) => {
    UserModel.findUserById(userId2).then((user2) => {
      if (!user1._match) {
        user1._match.push(_match);
      } else {
        user1._match = [_match];
      }
      if (!user2._match) {
        user2._match.push(_match);
      } else {
        user2._match = [_match];
      }
      userModel.updateUser(user1._id, user1).then((up_user_1) => {
        console.log('user 1 update');
        console.log(up_user_1);
        userModel.updateUser(user2._id, user2).then((up_user_2) => {
          console.log('user 2 update');
          console.log(up_user_2);
          return MatchModel.create(_match);
        });
      });
    });
  });
}

module.exports = MatchModel;

