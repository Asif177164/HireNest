import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./connect.cjs";
import authRoutes from "./routes/authRoutes.js";
import verifyToken from "./middleware/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "config.env") });

const app = express();
const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

/* Protected example route */
app.get("/api/auth/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

/* Health check */
app.get("/api/health", (req, res) => res.json({ status: "Server running" }));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
