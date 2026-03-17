import nodemailer from "nodemailer";

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL_USER and EMAIL_PASS must be set in .env");
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465,
    secure: process.env.EMAIL_PORT === "465",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const sendVerificationEmail = async (email, token) => {
  const transporter = createTransporter();
  const backendUrl =
    process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 5004}`;
  const verificationUrl = `${backendUrl}/api/auth/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email - HireNest",
    html: `
      <h2>Welcome to HireNest!</h2>
      <p>Please verify your email by clicking the button below:</p>
      <a href="${verificationUrl}" 
         style="background:#2563eb;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:bold;">
         Verify Email
      </a>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't create an account, ignore this email.</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${email}: ${info.messageId}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
