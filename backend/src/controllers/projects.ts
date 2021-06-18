import express from 'express';
import projectsService from '../localData/services/projectsService';
const Project = require('../models/project');
const projectsRouter = express.Router();

projectsRouter.get('/local', (_req, res) => {
	res.send(projectsService.getAll())
});

projectsRouter.get('/', async (_req, res) => {
	const projects = await Project.find({});
	res.json(projects);
})


export default projectsRouter;
