require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoute");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api", userRoute);

app.get("/", (req, res) => {
	res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
	res.send("Hello user, My name is Satveak");
});

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log("connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Node API app is running on port 3000`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
