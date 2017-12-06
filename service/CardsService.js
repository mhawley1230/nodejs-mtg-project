'use strict';


/**
 * find by color(s)
 *
 * color String 
 * returns Card
 **/
exports.cardsFindByColorsGET = function(color) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
  "name" : "Torrential Gearhulk",
  "no_played" : 3,
  "id" : 315,
  "main_deck" : true,
  "colors" : "Blue"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Allows users to find cards by name
 *
 * name String 
 * returns inline_response_200_4
 **/
exports.cardsFindByNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
    "name" : "Torrential Gearhulk",
    "no_played" : 3,
    "id" : 315,
    "main_deck" : true,
    "colors" : "Blue"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Allow users to get all cards
 *
 * returns Card
 **/
exports.cardsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
  "name" : "Torrential Gearhulk",
  "no_played" : 3,
  "id" : 315,
  "main_deck" : true,
  "colors" : "Blue"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Allows users to search for an event by id
 *
 * id Integer event id
 * returns inline_response_200_3
 **/
exports.cardsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
    "name" : "Torrential Gearhulk",
    "no_played" : 3,
    "id" : 315,
    "main_deck" : true,
    "colors" : "Blue"
  },
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

