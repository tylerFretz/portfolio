const nodemailer = require('nodemailer');
const config = require('../utils/config');
const AWS = require('aws-sdk');
const { body } = require('express-validator');
const contactRouter = require('express').Router();

AWS.config.update({
	accessKeyId: config.SMTP_USER,
	secretAccessKey: config.SMTP_PASS,
	region: 'us-east-2',
});

const transporter = nodemailer.createTransport({
	SES: new AWS.SES({
	  apiVersion: '2010-12-01'
	})
});

contactRouter.post('/',
	body('firstName').not().isEmpty().trim().escape(),
	body('lastName').not().isEmpty().trim().escape(),
	body('email').isEmail().normalizeEmail(),
	body('message').not().isEmpty().trim().escape(),
	async (req, res) => {
		const { body } = req;

		try {
			transporter.sendMail({
				from: 'fretztyler@gmail.com',
				to: 'fretztyler@gmail.com',
				subject: 'Profile Contact',
				text: `First name: ${body.firstName}\nLast name: ${body.lastName}\nEmail: ${body.email}\nMessage: ${body.message}`
			  }, (err, info) => {
				console.log(info.envelope);
				console.log(info.messageId);
			  });
			  res.sendStatus(200);
		} catch (err) {
			console.log(err);
			res.sendStatus(500);
		}
});

module.exports = contactRouter;