const fs = require("fs");
const nodePath = require("path");

const requestLogger = (req, _res, next) => {
	console.log("Method:", req.method);
	console.log("Path:  ", req.path);
	console.log("Body:  ", req.body);
	console.log("---");
	next();
};

const unknownEndpoint = (req, res) => {
	res.send(req)
	res.status(404).send({ error: 'unknown endpoint' })
}


const errorHandler = (err, _req, res, next) => {
	if (!err) next();

	if (err.name === "CastError") {
		return res.status(400).send({ error: "malformatted id" });
	}
	else if (err.name === "ValidationError") {
		return res.status(400).json({ error: err.message });
	}

	console.error(err);

	next(err);
};

module.exports = {
	requestLogger,
	unknownEndpoint,
	errorHandler
};