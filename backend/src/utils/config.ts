require("dotenv").config();

const { PORT, MONGODB_URI, SMTP_USER, SMTP_PASS } = process.env;

export default {
	PORT,
	MONGODB_URI,
	SMTP_USER,
	SMTP_PASS
};