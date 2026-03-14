import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 5004}`}/api/auth/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email - HireNest",
    html: `
      <h1>Welcome to HireNest!</h1>
      <p>Please verify your email by clicking the link below:</p>
      <a href="${verificationUrl}" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't create an account, ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent to", email);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
