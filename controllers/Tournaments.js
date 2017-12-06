'use strict';

var utils = require('../utils/writer.js');
var Tournaments = require('../service/TournamentsService');

module.exports.tournamentsFindByNameGET = function tournamentsFindByNameGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  Tournaments.tournamentsFindByNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsGET = function tournamentsGET (req, res, next) {
  Tournaments.tournamentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsIdGET = function tournamentsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Tournaments.tournamentsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsPOST = function tournamentsPOST (req, res, next) {
  var name = req.swagger.params['name'].value;
  Tournaments.tournamentsPOST(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
