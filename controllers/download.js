const downloadRouter = require('express').Router();

downloadRouter.get('/resume', (_req, res) => {
	res.download('./localData/tylerFretzResume.pdf');
})

module.exports = downloadRouter;