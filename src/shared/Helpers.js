const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

module.exports = class Helpers {
  static async sendMail(user, subject, type, extraData = {}) {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: process.env.PORT_EMAIL,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const html = this.generateHtml(type, user, extraData);

    if (!html) {
      throw new Error("Invalid email type provided.");
    }

    try {
      await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: user.email,
        subject,
        html, 
      });
      console.log(`Email sent to ${user.email}`);
    } catch (error) {
      console.error(`Error sending email to ${user.email}:`, error.message);
      throw new Error("Failed to send email");
    }
  }

  static generateHtml(type, user, extraData) {
    switch (type) {
      case "register":
        return `
              <!DOCTYPE html>
              <html>
              <body>
                <h1>Welcome to Our Platform, ${user.username}!</h1>
                <p>Thank you for registering. We're excited to have you on board.</p>
                <p>If you have any questions, feel free to reach out to us.</p>
                <p>Best regards,</p>
                <p>The Team</p>
              </body>
              </html>
            `;

      case "forgot":
        const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${extraData.resetToken}`;
        return `
              <!DOCTYPE html>
              <html>
              <body>
                <p>Hello ${user.username},</p>
                <p>You requested to reset your password. Click the link below to reset your password:</p>
                <p><a href="${resetLink}" style="color: blue; text-decoration: underline;" target="_blank">Reset Password</a></p>
                <p>Or copy and paste the following link into your browser:</p>
                <p>${resetLink}</p>
                <p>If you did not request this, please ignore this email.</p>
                <p>Best regards,</p>
                <p>The Team</p>
              </body>
              </html>
            `;

      case "reset":
        return `
              <!DOCTYPE html>
              <html>
              <body>
                <h1>Hello ${user.username},</h1>
                <p>Your password has been successfully reset.</p>
                <p>If you didn't make this change, please contact us immediately.</p>
                <p>Best regards,</p>
                <p>The Team</p>
              </body>
              </html>
            `;

      default:
        return null;
    }
  }
};
