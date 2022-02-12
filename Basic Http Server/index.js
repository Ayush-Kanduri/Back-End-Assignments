const http = require("http");
const port = 8000;
const server = http.createServer();

server.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server is Up & Running Successfully on Port: ${port}`);
});
