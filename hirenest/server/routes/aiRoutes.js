import express from "express";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();
import { getChatResponse } from "../controllers/aiController.js";

// This creates the /chat part of the URL
router.post("/chat", verifyToken, getChatResponse);

export default router;
