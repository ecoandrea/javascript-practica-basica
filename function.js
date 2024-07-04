function square(number) {
  return number * number;
}

console.log(square(4));

let someVar = "Hat";
function myFun() {
  let someVar = "Shoes";
  console.log(someVar);
}

myFun();
console.log(someVar);

console.log(addSquares(1, 3));

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);

}
/*
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
    */
