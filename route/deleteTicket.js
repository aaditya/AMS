var mongoose = require('mongoose')

/* Model Import */
var tickets = require('../models/tickets.js')

var dt = function(req,res) {
  var flightNo = req.params.flightNum
  tickets.findOneAndRemove({'ticket_details.ticketNo':flightNo},function(err,data){
    if(err) {
      res.send(err)
    }
    var message = {
      "info":"Deleted "+flightNo
    }
    res.json(message)
  })
}

module.exports = dt
