'use strict';

var utils = require('../utils/writer.js');
var Decks = require('../service/DecksService');

module.exports.decksFindByNameGET = function decksFindByNameGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  Decks.decksFindByNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.decksFindByPlacingGET = function decksFindByPlacingGET (req, res, next) {
  var placing = req.swagger.params['placing'].value;
  Decks.decksFindByPlacingGET(placing)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.decksFindByPlayerGET = function decksFindByPlayerGET (req, res, next) {
  var player = req.swagger.params['player'].value;
  Decks.decksFindByPlayerGET(player)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.decksGET = function decksGET (req, res, next) {
  Decks.decksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.decksIdGET = function decksIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Decks.decksIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
