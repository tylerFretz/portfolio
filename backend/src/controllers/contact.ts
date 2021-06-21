import express from 'express';
import nodemailer from 'nodemailer';
import config from "../utils/config";
const contactRouter = express.Router();

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: `${config.SMTP_USER}`,
		pass: `${config.SMTP_PASS}`
	}
});

contactRouter.post('/', (req, res) => {
	const { body } = req;

	const mail = {
		from: body.email,
		to: 'fretztyler@gmail.com',
		subject: `Portfolio contact from: ${body.firstName} ${body.lastName}`,
		html: `<p>Email: ${body.email}</p>
			   <p>Message: ${body.message}</p>`
	};

	transporter.sendMail(mail, (error) => {
		if (error) {
			res.json({ status: "ERROR" });
		} else {
			res.json({ status: "Message Sent" });
		}
	});

});

export default contactRouter;
