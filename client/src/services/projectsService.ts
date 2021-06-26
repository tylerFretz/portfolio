import axios from 'axios';

const BASE_URL = '/api/projects';

export const getProjects = async () => {
	const { data } = await axios.get(`${BASE_URL}/local`);
	return data;
};