const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware


app.use(cors());
app.use(bodyParser.json());



// MongoDB connection URI
const dbURI = 'mongodb://localhost:27017/salonBookingApp'; // Change salonDB to your database name

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the Salon schema (structure of salon data)
const salonSchema = new mongoose.Schema({
  name: String,
  location: String,
  services: [String],
  timeSlots: [String]
});

// Create the Salon model based on the schema
const Salon = mongoose.model('Salon', salonSchema);

app.get('/api/salons', async (req, res) => {
  try {
    const salons = await Salon.find({}); // Replace 'Salon' with your Mongoose model
    res.status(200).json(salons);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Set up the server to listen on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});