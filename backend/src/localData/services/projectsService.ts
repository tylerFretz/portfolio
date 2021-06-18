import projects from '../data/projects';
import { Project } from '../../types';

const getAll = (): Project[] => {
	return projects;
}

export default {
	getAll
};