import express from 'express';
const router = express.Router();
import { getChatResponse } from '../controllers/aiController.js';

// This creates the /chat part of the URL
router.post('/chat', getChatResponse);

export default router;