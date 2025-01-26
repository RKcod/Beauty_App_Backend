const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = class Helpers {

    static async sendMail(to , subject , html ){
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_MAIL,
            port: process.env.PORT_EMAIL,
            secure: true, 
            auth: {
                user: process.env.USER_EMAIL, 
                pass: process.env.PASSWORD_EMAIL, 
            },
        });


        try {
            await transporter.sendMail({
                from: process.env.USER_EMAIL, 
                to, 
                subject, 
                html, 
            });
            console.log(`Email sent to ${to}`);
        } catch (error) {
            console.error(`Error sending email to ${to}:`, error.message);
            throw new Error('Failed to send email');
        }
    }
}