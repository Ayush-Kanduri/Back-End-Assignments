//Logical Assignment Operators assign a value based on the given Logical condition.

//If a is true, then assign value to a.
//If a is false, then do nothing.

let obj = {
	a: 2,
	// a: 0 null undefined "" NaN,
};
function True(obj) {
	obj.a &&= 5;
}
True(obj);
console.log(obj.a);

//If b is true, then do nothing.
//If b is false, then assign value to b.

let obj2 = {
	// b: 2,
	// b: 0 null undefined "" NaN,
	b: NaN,
};
function False(obj2) {
	obj2.b ||= 10;
}
False(obj2);
console.log(obj2.b);
