const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  timeSlots: [String],
  services: [String]
});

const Salon = mongoose.model('Salon', salonSchema);
module.exports = Salon;
