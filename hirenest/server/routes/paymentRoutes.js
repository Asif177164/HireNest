import express from 'express';
import {
  initializePayment,
  handlePaymentSuccess,
  handlePaymentFail,
  handlePaymentCancel,
  handlePaymentIPN,
  getPaymentStatus
} from '../controllers/paymentController.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.post('/initialize', verifyToken, initializePayment);

router.post('/success', handlePaymentSuccess);
router.post('/fail', handlePaymentFail);
router.post('/cancel', handlePaymentCancel);
router.post('/ipn', handlePaymentIPN);

router.get('/status/:transactionId', verifyToken, getPaymentStatus);

router.get('/posting-fee', (req, res) => {
  const fee = parseInt(process.env.JOB_POSTING_FEE) || 100;
  res.json({ fee });
});

export default router;
