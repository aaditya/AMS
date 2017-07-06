var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

/* Mongoose connection */
mongoose.connect('mongodb://admin:admin123@ds032887.mlab.com:32887/ams')

/* Page Routes */
router.get('/',function(req,res){
  res.sendFile(__dirname + "/pages/index.html")
})

router.post('/bookFlight',function(req,res){
  var nt = require('./route/newTicket.js')(req,res)
})

router.get('/deleteFlight/:flightNum',function(req,res){
  var dt = require('./route/deleteTicket.js')(req,res)
})

router.get('/numTicketsBooked',function(req,res){
  var nut = require('./route/numTickets.js')(req,res)
})

router.get('/listFlights',function(req,res){
  var lf = require('./route/listTickets.js')(req,res)
})

router.get('/listUsers',function(req,res){
  var lu = require('./route/listUsers.js')(req,res)
})

module.exports = router
