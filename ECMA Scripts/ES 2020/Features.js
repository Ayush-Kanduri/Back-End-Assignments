//------------------------------------------------------------
// 1. Global This Keyword - ES2020 - Features //
//Window can't be used for NodeJS, so 'globalThis' is a common Global Window for all the codes.
// console.log(this); - doesn't work
// console.log(self); - doesn't work
// console.log(window); - doesn't work
// console.log(frame); - doesn't work
console.log(globalThis); // works
//------------------------------------------------------------
// 2. Promises.allSettled() - ES2020 - Features //
//Checks, If all the promises have been settled or not. It returns the value signifying the completion of all the promises despite of it being rejected or resolved.
const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve("Promise 1"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
	setTimeout(reject("Promise 2"), 2000);
});
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve("Promise 3"), 3000);
});

// Promise.all([promise1, promise2, promise3])
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.log("Caught Exception of " + error);
// 	}); - Throws error as Promise 2 is rejected.
Promise.allSettled([promise1, promise2, promise3]).then((result) => {
	console.log(result);
}); // Returns an array of objects with the status of all the promises after their completion.
//------------------------------------------------------------
// 2. Promises.allSettled() - ES2020 - Features //
