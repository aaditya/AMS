var mongoose = require('mongoose')

/* Model Import */
var tickets = require('../models/tickets.js')

var nt = function(req,res) {
  var newTicket = new tickets({
    user_details : {
      "name":req.body.name,
      "phone":req.body.phone,
      "address":req.body.address,
      "age":req.body.age,
      "gender":req.body.gender
    },
    ticket_details : {
      "ticketNo":req.body.tno,
      "price":req.body.price,
      "departureTime":req.body.dtime,
      "arrivalTime":req.body.atime,
      "airlineName":req.body.airName
    }
  })
  newTicket.save(function (err,data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      res.json(data)
    }
  });
}

module.exports = nt
