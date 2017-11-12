var express = require('express');
var router = express.Router();

var gymBuddyService = require('../gymBuddy-service');

router.get('/gymBuddies', function(req, res, next) {
  gymBuddyService.get(req, res);
});

router.post('/gymBuddies', function(req, res, next) {
  gymBuddyService.create(req, res);
});

router.put('/gymBud', function(req, res, next) {
  gymBuddyService.update(req, res);
});

router.delete('/gymBud/:id', function(req, res, next) {
  gymBuddyService.destroy(req, res);
});
module.exports = router;
