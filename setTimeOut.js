// setTimeout
let timeoutID = setTimeout(bye, 3000);

console.log('hello');

function bye() {
  console.log('goodbye');
}



let timeoutID2 = setTimeout(bye, 2000);

console.log('hello');

clearTimeout(timeoutID2);

function bye() {
  console.log('goodbye');
}

// setInterval

let count = 0
let intId = setInterval(counter, 1000);
 
function counter() {
  console.log(++count);
}
  