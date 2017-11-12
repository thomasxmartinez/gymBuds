const gymBuddy = require('./gymBuddy-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = gymBuddy.find({}).read(ReadPreference.Nearest);
  docquery
    .exec()
    .then(gymBuddy => res.json(gymBuddy))
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, saying } = req.body;

  const gymBud = new gymBuddy({ id, name, saying });
  gymBud
    .save()
    .then(() => {
      res.json(gymBud);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, name, saying } = req.body;

  gymBuddy
    .findOne({ id })
    .then(gymBud => {
      gymBud.name = name;
      gymBud.saying = saying;
      gymBud.save().then(res.json(gymBud));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  gymBuddy
    .findOneAndRemove({ id })
    .then(gymBud => {
      res.json(gymBud);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, destroy, update };
