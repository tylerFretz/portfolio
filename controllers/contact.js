const { body } = require('express-validator');
const config = require('../utils/config');
const contactRouter = require('express').Router();
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'us-east-1' });

contactRouter.post('/',
	body('firstName').not().isEmpty().trim().escape(),
	body('lastName').not().isEmpty().trim().escape(),
	body('email').isEmail().normalizeEmail(),
	body('message').not().isEmpty().trim().escape(),
	async (req, res) => {
		const { body } = req;

		const params = {
			Destination: {
				ToAddresses: [ config.SMTP_USER ]
			},
			Message: {
				Body: {
					Html: {
						Charset: 'UTF-8',
						Data: `<h3>Name: ${body.firstName} ${body.lastName}</h3>
						<h3>Email: ${body.email}</h3>
						<p>Message: ${body.message}</p>`
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: 'Portfolio contact'
				}
			},
			Source: config.SMTP_USER
		};

		try {
			const data = await sesClient.send(new SendEmailCommand(params));
			res.json({ status: 'Message sent' });
		} catch (err) {
			console.log(err);
			res.json({ status: "Error sending message" });
		}
});

module.exports = contactRouter;