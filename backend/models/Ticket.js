const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    name: { type: String, required: true },
    trainNumber: { type: String, required: true },
    date: { type: Date, required: true },
    seatNumber: { type: String, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);