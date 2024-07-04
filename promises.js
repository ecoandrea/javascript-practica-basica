// Promises

// Basic usage
let p = new Promise(function(resolve, reject) {
	
	// se hace una tarea asincrona y despues ...

	if(good_condition) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() { 
	// then se hace algo con el resultado
}).catch(function() {
	// el error
})


// Complete example

let promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + ': Started - Sync code started');

  let p1 = new Promise(function(resolve, reject) {
    console.log(thisPromiseCount + ': Promise started - Async code started');
   
    window.setTimeout(
      function() {
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  p1.then(function(value) {
    console.log(value + ': Promise fulfilled - Async code terminated');
  }).catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

  console.log(thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();



let i = "#";

for (i = "#"; i === "#"; i = i + "#"); 

console.log(i)

 let finanzas = 1000

function tocarPeluche() {
    console.log("cada tocada al peluche cuesta $100")
    finanzas = finanzas - 100
    return finanzas
}

tocarPeluche(); //
tocarPeluche();//

