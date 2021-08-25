const { body } = require('express-validator');
const nodemailer = require('nodemailer');
const config = require('../utils/config');
const contactRouter = require('express').Router();

// https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: true,
	auth: {
		user: config.SMTP_USER,
		pass: config.SMTP_PASS
	}

});

contactRouter.post('/',
	body('firstName').not().isEmpty().trim().escape(),
	body('lastName').not().isEmpty().trim().escape(),
	body('email').isEmail().normalizeEmail(),
	body('message').not().isEmpty().trim().escape(),
	(req, res) => {
		const { body } = req;

		transporter.sendMail({
			from: config.SMTP_USER,
			to: 'fretztyler@gmail.com',
			subject: 'Portfolio contact',
			html: `<h3>Name: ${body.firstName} ${body.lastName}</h3>
			   <h3>Email: ${body.email}</h3>
			   <p>Message: ${body.message}</p>`
		}, (error) => {
			if (error) {
				console.log(error);
				res.json({ status: "ERROR" });
			} else {
				res.json({ status: "Message Sent" });
			}
		});

	});

module.exports = contactRouter;