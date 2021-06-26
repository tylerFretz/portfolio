import axios from 'axios';

const BASE_URL = '/api/contact';

interface Mail {
	firstName: string,
	lastName: string,
	email: string,
	message: string
};

export const sendEmail = async (mailObject: Mail) => {
	const req = axios.post(BASE_URL, mailObject);
	const res = await req;
	return res.data;
};