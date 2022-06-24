const model = require("../models/Flight");

exports.notFound = (req, res) => {
  res.send("Incorrect Route");
};

exports.example = (req, res) => {
  res.send("Flight Booking API");
};

exports.getAllFlight = (req, res) => {
  res.send(model.exampleModel);
};

exports.getSingleFlight = (req, res) => {
  // return single flight
  const { id } = req.params;
  res.send(model.exampleModel[id]);
};

exports.addFlight = (req, res) => {
  const body = req.body;

  model.exampleModel.push({ ...body });
  res.json({ message: "new data added", data: model.exampleModel });
};

exports.updateFlight = (req, res) => {
  // update single flight
  const { id } = req.params;
  const body = req.body;

  model.exampleModel.splice(id, 1, {...body});
  res.json({ message: "data updated", data: model.exampleModel[id] });
};

exports.deleteFlight = (req, res) => {
  // delete single flight
  const { id } = req.params;

  model.exampleModel.splice(id, 1);
  // Returns all data left
  res.json({ message: "data deleted", data: model.exampleModel });
};