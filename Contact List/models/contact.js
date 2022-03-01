//Create the same instance of mongoose which is used in the MongoDB configuration inside config.
const mongoose = require("mongoose");

//Create the DB Schema
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});

//Create a Model/Collection to populate the data with the same name for the schema in the DB
const Contact = mongoose.model("Contact", contactSchema);

//Export the Model/Collection
module.exports = Contact;
