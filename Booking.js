const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  salonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon' },
  customerName: String,
  service: String,
  timeSlot: String,
  status: { type: String, default: 'Pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
