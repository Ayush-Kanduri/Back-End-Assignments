//Take arguments from the command line
let arguments = process.argv;
/* OUTPUT - [Path where NodeJS is being run,
            Path of the file,
            Arguments passed to the file ...] */
console.log(arguments);

//Slice the arguments array to remove the first two elements
let numbers = arguments.slice(2);
//Print the Arguments
console.log(numbers);
