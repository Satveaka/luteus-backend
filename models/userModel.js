const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a product name"],
		},
		city: {
			type: String,
			required: true,
		},
		ward: {
			type: String,
			required: true,
		},
		vw: {
			type: Number,
			required: true,
		},
		sq: {
			type: Number,
			required: true,
		},
		c: {
			type: Number,
			required: true,
		},
		ei: {
			type: Number,
			required: true,
		},
		ce: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
