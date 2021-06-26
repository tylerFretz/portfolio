require("dotenv").config();

const { PORT, MONGODB_URI, SMTP_USER, SMTP_PASS } = process.env;

module.exports = {
	PORT,
	MONGODB_URI,
	SMTP_USER,
	SMTP_PASS
};