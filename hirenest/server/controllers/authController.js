import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { sendVerificationEmail } from "../utils/emailService.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, username, password, role } = req.body;
    if (!firstName || !lastName || !email || !username || !password || !role) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser)
      return res
        .status(409)
        .json({ error: "Email or username already registered" });

    const passwordHash = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = new User({
      firstName,
      lastName,
      email,
      username,
      passwordHash,
      role,
      isVerified: false,
      verificationToken,
      verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();

    await sendVerificationEmail(email, verificationToken);

    res
      .status(201)
      .json({ message: "Registration successful. Please verify your email." });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ error: "Username/email and password required" });

    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    if (!user.isVerified)
      return res.status(401).json({ error: "Please verify your email first" });

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch)
      return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).json({ error: "Invalid token" });

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user)
      return res.status(400).json({ error: "Invalid or expired token" });

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.isVerified)
      return res
        .status(400)
        .json({ error: "Invalid email or already verified" });

    const verificationToken = crypto.randomBytes(32).toString("hex");
    user.verificationToken = verificationToken;
    user.verificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000;
    await user.save();

    await sendVerificationEmail(email, verificationToken);
    res.json({ message: "Verification email resent" });
  } catch (error) {
    console.error("Resend verification error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
