const Ticket = require('../models/ticket');
const jwt = require('jsonwebtoken');




// Add Ticket
const ticket_create = async (req, res) => {
// console.log(req.body)
  const ticket = new Ticket({
      indigo: req.body.indigo,
      airAsia: req.body.airAsia,
      vistara: req.body.vistara
    });


  console.log(ticket);
    try {
      const savedsticket = await ticket.save();
      res.send(savedsticket);
    } catch (error) {
      res.status(400).send(error);
    }
};


module.exports = {
 
  ticket_create, 
 
}