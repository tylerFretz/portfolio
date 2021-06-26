const projects = require('../localData/projects');
const projectsRouter = require('express').Router();

projectsRouter.get('/local', (_req, res) => {
	res.send(projects)
});

module.exports = projectsRouter;