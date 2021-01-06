// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	// var sum = a + b;

// 	// return sum;
// 	function multiply() { 
// 		var result = a*b;
// 		return result;
// 	}
// 	return multiply;
// }

// var theResult = doSomeMath();

// console.log("The result: ", theResult);



function giveMeEms(pixels) { 
	var base = 16; 

	function doMath() { 
		return pixels/base;
	}
	return doMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var XLSize = giveMeEms(32);

console.log("Small: ", smallSize);
console.log("Med: ", mediumSize);
console.log("L: ", largeSize);
console.log("XL: ", XLSize);











