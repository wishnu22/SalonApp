const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: 'your_key_id', // Replace with your Razorpay key ID
  key_secret: 'your_key_secret', // Replace with your Razorpay key secret
});

// Create Razorpay Order
app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: 'receipt_id',
    });
    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Something went wrong');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
