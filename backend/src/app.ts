import express from "express";
require('express-async-errors');
import cors from "cors";
const db = require('./utils/db_helper');
const middleware = require("./utils/middleware");
import projectsRouter from "./controllers/projects";

const app = express();

db.connect().catch(err => {
	console.log(err);
});

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use('/api/projects', projectsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;