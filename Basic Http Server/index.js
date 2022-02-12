//Require the HTTP Module for creating & running the NodeJS Server
const http = require("http");
//Create Port
const port = 8000;
//Require File System Module to Read the File in NodeJS
const fs = require("fs");

//Request Handler to handle the Request-Response in NodeJS
const requestHandler = (request, response) => {
	//url request coming to the server(our server) - Request URL Load
	console.log(request.url);
	//Setting Response Content Type
	response.writeHead(200, { "content-type": "text/html" });
	//Declare FilePath
	let filepath;
	//Switching over the HTML Pages on the basis of the Request URL
	switch (request.url) {
		case "/":
			filepath = "./index.html";
			break;
		case "/profile":
			filepath = "./profile.html";
			break;
		default:
			filepath = "./404.html";
	}
	//Read the HTML File
	fs.readFile(filepath, (err, data) => {
		if (err) {
			console.log("ERROR:", err);
			return response.end("<h1>Error</h1>");
		}
		//Return the HTML File/Page/Data as a Response
		return response.end(data);
	});

	// //response sending to the client(browser)
	// response.end("<h1>Hello World</h1>");
};

//Create NodeJS Server
const server = http.createServer(requestHandler);

//Run the NodeJS Server
server.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server is Up & Running Successfully on Port: ${port}`);
});
