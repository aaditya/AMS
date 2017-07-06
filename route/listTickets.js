var mongoose = require('mongoose')

/* Model Import */
var tickets = require('../models/tickets.js')

var lat = function(req,res) {
  tickets.find({}, function(err, data){
    var filterData = data.map(function(element) {
      return element.ticket_details
    })
  res.json(filterData)
  });
}

module.exports = lat
