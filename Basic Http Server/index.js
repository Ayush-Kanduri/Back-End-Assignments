//Require the HTTP Module for creating & running the NodeJS Server
const http = require("http");
//Create Port
const port = 8000;

//Request Handler to handle the Request-Response in NodeJS
const requestHandler = (request, response) => {
	//url request coming to the server(our server) - Request URL Load
	console.log(request.url);
	//response sending to the client(browser)
	response.end("Hello World");
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
