import axios from 'axios';
import download from 'downloadjs';

const BASE_URL = '/api/download';


export const downloadResume = async () => axios.get(`${BASE_URL}/resume`, { responseType: 'blob' })
	.then((result) => {
		download(result.data, 'tylerFretzResume.pdf', result.headers['content-type']);
	}).catch((err) => {
		console.log(err);
	});

