"use strict";
//Strict Mode 

function myFunction() {
  "use strict";
	let y = 3.14;  
}

// CONVERTING MISTAKES INTO ERRORS

let x = 3.14;
delete x;   

let obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;

let obj = {get x() {return 0} };
obj.x = 3.14;

delete Object.prototype;

function sum(a, a, c) { 
  'use strict';
  return a + b + c; 
}


// WITH AND EVAL CHANGES

let x = 17;
with (obj) {
  x; // Is this let x or obj.x?
}

eval("var x;")

let x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);


// SECURING JAVASCRIPT