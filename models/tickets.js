var mongoose = require('mongoose');
var schema = mongoose.Schema

var tickets = new schema({
  "user_details" : {
    "name":String,
    "phone":Number,
    "address":String,
    "age":Number,
    "gender":String
  },
  "ticket_details" : {
    "ticketNo":String,
    "price":Number,
    "departureTime":String,
    "arrivalTime":String,
    "airlineName":String
  }
})

module.exports = mongoose.model('Tickets',tickets)
