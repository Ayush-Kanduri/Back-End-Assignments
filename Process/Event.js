//Returns the current working directory of the process
let directory = process.cwd();
console.log(directory);

//Event when the process is about to exit
process.on("exit", (code) => {
	console.log("Process exit with a code: " + code);
});
