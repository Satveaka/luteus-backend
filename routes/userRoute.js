const express = require("express");
const User = require("../models/userModel");
const { getUsers } = require("../controllers/userController");

const router = express.Router();

// get all users
router.get("/users", getUsers);

// get a single user
router.get("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const users = await User.findById(id);
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// create a user
router.post("/users", async (req, res) => {
	try {
		const users = await User.create(req.body);
		res.status(200).json(users);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

// update a product
router.put("/users/:id", async (req, res) => {
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

router.delete("/users/:id", async (req, res) => {
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

router.delete("/users", async (req, res) => {
	try {
		await User.deleteMany({});
		res.status(200).json({ message: "All users deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
