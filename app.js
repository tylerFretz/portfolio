const express = require('express');
const path = require('path');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const middleware = require("./utils/middleware");
const projectsRouter = require("./controllers/projects");
const contactRouter = require("./controllers/contact");
const downloadRouter = require("./controllers/download");
const config = require("./utils/config");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname + '/client/public')));
app.use('/images', express.static('images'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);
app.use('/api/download', downloadRouter);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;