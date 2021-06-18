const mongoose = require("mongoose");
import config from "./config";

module.exports.connect = async () => {
	mongoose.connection.on("connected", () => {
		console.log("Connection Established");
	});

	mongoose.connection.on("reconnected", () => {
		console.log("Connection Reestablished");
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Connection Disconnected");
	});

	mongoose.connection.on("close", () => {
		console.log("Connection Closed");
	});

	mongoose.connection.on("error", (error: any) => {
		console.error(`ERROR: ${error}`);
	});

	if (process.env.NODE_ENV === "test") {
		return Promise.resolve("");
	}

	mongoose.set("useCreateIndex", true);
	mongoose.set("useFindAndModify", false);

	return mongoose.connect(config.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};