'use strict';


/**
 * Allows users to find decks by name
 *
 * name String 
 * returns inline_response_200_2
 **/
exports.decksFindByNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "cards" : [ {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    }, {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    } ],
    "name" : "UR Control",
    "id" : 256,
    "placing" : 1,
    "player" : "Luis Scott-Vargas"
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
 * Allows users to find decks by event placing
 *
 * placing Integer 
 * returns inline_response_200_2
 **/
exports.decksFindByPlacingGET = function(placing) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "cards" : [ {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    }, {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    } ],
    "name" : "UR Control",
    "id" : 256,
    "placing" : 1,
    "player" : "Luis Scott-Vargas"
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
 * Allows users to find decks by player
 *
 * player String 
 * returns inline_response_200_2
 **/
exports.decksFindByPlayerGET = function(player) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "cards" : [ {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    }, {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    } ],
    "name" : "UR Control",
    "id" : 256,
    "placing" : 1,
    "player" : "Luis Scott-Vargas"
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
 * Allow users to get decks
 *
 * returns Deck
 **/
exports.decksGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cards" : [ {
    "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
    "name" : "Torrential Gearhulk",
    "no_played" : 3,
    "id" : 315,
    "main_deck" : true,
    "colors" : "Blue"
  }, {
    "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
    "name" : "Torrential Gearhulk",
    "no_played" : 3,
    "id" : 315,
    "main_deck" : true,
    "colors" : "Blue"
  } ],
  "name" : "UR Control",
  "id" : 256,
  "placing" : 1,
  "player" : "Luis Scott-Vargas"
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
 * returns inline_response_200_1
 **/
exports.decksIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "cards" : [ {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    }, {
      "image_url" : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420589&type=card",
      "name" : "Torrential Gearhulk",
      "no_played" : 3,
      "id" : 315,
      "main_deck" : true,
      "colors" : "Blue"
    } ],
    "name" : "UR Control",
    "id" : 256,
    "placing" : 1,
    "player" : "Luis Scott-Vargas"
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

