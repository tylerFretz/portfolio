import express from 'express';
const downloadRouter = express.Router();

downloadRouter.get('/resume', (_req, res) => {
	res.download('./src/localData/data/tylerFretzResume.pdf');
})

export default downloadRouter;