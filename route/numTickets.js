var mongoose = require('mongoose')

/* Model Import */
var tickets = require('../models/tickets.js')

var nut = function(req,res) {
  tickets.count({}, function(err, count){
    var message = {
      "message":"Number of documents",
      "count":count
    }
    res.json(message);
  });
}

module.exports = nut
