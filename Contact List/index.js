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

//Home Page Controller
app.get("/", (request, response) => {
	////Send the Response to the clients
	//response.send(`Express Server is Up & Running Successfully on Port ${port}`);

	//Global Dynamic Variable for directory path
	console.log(__dirname);

	////Request information from the clients
	// console.log(request);

	//Send the Response to the clients
	response.send(
		`<h1>Express Server is Up & Running Successfully on Port ${port}</h1>`
	);
});

//Run the ExpressJS Server
app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Express Server is Up & Running Successfully on Port ${port}`);
});
