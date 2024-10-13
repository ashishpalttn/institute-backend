const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

exports.createOrder = async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const options = {
      amount: amount * 100, // Razorpay expects the amount in paisa
      currency: currency || 'INR',
      receipt: 'order_rcptid_11'
    };
    const order = await razorpay.orders.create(options);
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: 'Order creation failed', error });
  }
};

exports.verifyPayment = (req, res) => {
  const { order_id, payment_id, signature } = req.body;
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  hmac.update(order_id + '|' + payment_id);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === signature) {
    return res.status(200).json({ status: 'Payment verified successfully' });
  } else {
    return res.status(400).json({ status: 'Payment verification failed' });
  }
};
