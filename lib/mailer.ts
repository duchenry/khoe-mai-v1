// src/lib/mailer.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // ví dụ: khoemai.health@gmail.com
    pass: process.env.EMAIL_PASS, // đây PHẢI LÀ app password (16 ký tự)
  },
});
