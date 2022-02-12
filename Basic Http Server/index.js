//Require the HTTP Module for creating & running the NodeJS Server
const http = require("http");
//Create Port
const port = 8000;
//Create NodeJS Server
const server = http.createServer();

//Run the NodeJS Server
server.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server is Up & Running Successfully on Port: ${port}`);
});
