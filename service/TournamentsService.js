'use strict';


/**
 * Allows users to find events by name of event
 *
 * name String 
 * returns Tournament
 **/
exports.tournamentsFindByNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "12/30/2017",
  "name" : "Friday Night Magic",
  "format" : "Standard",
  "no_of_players" : 200,
  "location" : "Boston, MA",
  "decks" : [ {
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
  }, {
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
  } ],
  "id" : 222
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Allow users to get events
 *
 * returns Tournament
 **/
exports.tournamentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "12/30/2017",
  "name" : "Friday Night Magic",
  "format" : "Standard",
  "no_of_players" : 200,
  "location" : "Boston, MA",
  "decks" : [ {
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
  }, {
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
  } ],
  "id" : 222
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
 * returns inline_response_200
 **/
exports.tournamentsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "date" : "12/30/2017",
    "name" : "Friday Night Magic",
    "format" : "Standard",
    "no_of_players" : 200,
    "location" : "Boston, MA",
    "decks" : [ {
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
    }, {
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
    } ],
    "id" : 222
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


/**
 * Allows users to post events with top 8 decklists and card info
 * Allows users to post events data
 *
 * name Name event description
 * returns Tournament
 **/
exports.tournamentsPOST = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "12/30/2017",
  "name" : "Friday Night Magic",
  "format" : "Standard",
  "no_of_players" : 200,
  "location" : "Boston, MA",
  "decks" : [ {
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
  }, {
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
  } ],
  "id" : 222
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

