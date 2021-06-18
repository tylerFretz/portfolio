const app = require('./app');
const http = require('http');
import config from "./utils/config";

const server = http.createServer(app);

server.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
});