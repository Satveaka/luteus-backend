const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get("/", (req, res) => {
	res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
	res.send("Hello user, My name is Satveak");
});

// get all users
app.get("/users", async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// get a single user
app.get("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const users = await User.findById(id);
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// create a user
app.post("/users", async (req, res) => {
	try {
		const users = await User.create(req.body);
		res.status(200).json(users);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

// update a product
app.put("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const users = await User.findByIdAndUpdate(id, req.body);
		// we cannot find any product in database
		if (!users) {
			return res
				.status(404)
				.json({ message: `cannot find any user with ID ${id}` });
		}
		const updatedProduct = await User.findById(id);
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// delete a product

app.delete("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const users = await User.findByIdAndDelete(id);
		if (!users) {
			return res
				.status(404)
				.json({ message: `cannot find any product with ID ${id}` });
		}
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

mongoose
	.connect(
		"mongodb+srv://user1:user1@cluster0.jeelr7p.mongodb.net/Demodb?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("connected to MongoDB");
		app.listen(3000, () => {
			console.log(`Node API app is running on port 3000`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
