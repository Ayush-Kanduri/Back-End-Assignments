//Require Express Module for running the Express Server
const express = require("express");
//Create Port
const port = 8000;
//Require Module Path for Directory
const path = require("path");
//Create Express App for Request-Response Cycle & to create the Express Server
const app = express();

//Set Up Template Engine as EJS
app.set("view engine", "ejs");
//Set Up Template Engine Views Folder Path (..../views)
app.set("views", path.join(__dirname, "views"));
//Middleware - URL Encoder
app.use(express.urlencoded());
//Middleware - Static Files
app.use(express.static("assets"));

//Contact List Array of Objects to store the data
let contactList = [
	{
		name: "Ayush",
		phone: "1234567890",
	},
	{
		name: "Aman",
		phone: "1234567891",
	},
	{
		name: "Akshay",
		phone: "1234567892",
	},
];

//Home Page URL Controller
app.get("/", (request, response) => {
	//Send the EJS View Response to the clients
	return response.render("home", {
		title: "Contact List",
		contact_list: contactList,
	});
});

//Practice Page URL Controller
app.get("/practice", (request, response) => {
	return response.render("practice", {
		title: "Let's Play with EJS",
	});
});

//Create-Contact Page Form URL Controller
app.post("/create-contact", (request, response) => {
	contactList.push(request.body);
	return response.redirect("back");
});

//Run the ExpressJS Server
app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Express Server is Up & Running Successfully on Port ${port}`);
});
