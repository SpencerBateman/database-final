var mongoose = require('mongoose');

var LocationSchema = require('./location.schema.server');
var LocationModel = mongoose.model('LocationModel', LocationSchema);

LocationModel.createLocation = createLocation;
LocationModel.updateLocation = updateLocation;
LocationModel.findLocation = findLocation;

async function createLocation() {
  return LocationModel.create({});
}

async function updateLocation(locationId, location) {
  var query = {_id: locationId};
  return LocationModel.update(query, location);
}

async function findLocation(locationId) {
  return LocationModel.findOne({_id: locationId});
}

module.exports = LocationModel;
