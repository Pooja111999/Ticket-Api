const mongooose = require('mongoose');

const ticketSchema = new mongooose.Schema({
  indigo: {
    type: String,
    // required: true,
  },
  airAsia: {
    type: String,
    required: true,
    unique: true,
  },
  vistara:{
    type:String,
    require:true,
  }
  
},
  {
    timestamps: true,
  }

);

const  Ticket= mongooose.model('Ticket', ticketSchema);
module.exports = Ticket;