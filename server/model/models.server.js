var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/cs5610', { useMongoClient: true});
module.exports = db;
