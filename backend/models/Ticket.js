const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  numberOfTickets: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Ticket', TicketSchema);