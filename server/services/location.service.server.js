module.exports = (app) => {

  let locationModel = require('../model/location/location.model.server');
  let scheduleModel = require('../model/schedule/schedule.model.server');
  let dayModel = require('../model/day/day.model.server');

  app.post('/api/location', createLocation);
  app.post('/api/location/:locationId', updateLocation);
  app.get('/api/location/:locationId', getLocationById);

  async function createLocation(req, res) {
    let location = {};

    let oldLocation = await locationModel.createLocation();
    let newSchedule = await scheduleModel.createScheduleForLocation(oldLocation._id);
    oldLocation.schedule = newSchedule;
    let newLocation = await locationModel.updateLocation(oldLocation._id, oldLocation);
    let updatedLocation = await locationModel.findLocation(oldLocation._id);
    return res.json(updatedLocation);
  }

  async function updateLocation(req, res) {
    let location = req.body;
    let locationId = location._id;
    let newLocation = await locationModel.updateLocation(locationId, location);
    let updatedLocation = await locationModel.findLocation(locationId);
    return res.json(updatedLocation);
  }

  async function getLocationById(req, res) {
    let locationId = req.params['locationId'];
    let location = await locationModel.findLocation(locationId);
    console.log(location);
    return res.json(location);
  }
}
