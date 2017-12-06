'use strict';

var utils = require('../utils/writer.js');
var Cards = require('../service/CardsService');

module.exports.cardsFindByColorsGET = function cardsFindByColorsGET (req, res, next) {
  var color = req.swagger.params['color'].value;
  Cards.cardsFindByColorsGET(color)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cardsFindByNameGET = function cardsFindByNameGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  Cards.cardsFindByNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cardsGET = function cardsGET (req, res, next) {
  Cards.cardsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cardsIdGET = function cardsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Cards.cardsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
