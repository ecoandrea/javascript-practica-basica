//
//  Closures guarda referencias del estado adyacente ,  accede al ámbito de una función exterior desde una función interior.

function makeFunc() {
    let name = "Javascript";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  let myFunc = makeFunc();
  myFunc();
  
  
  let counter = (function() {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  })();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value()); 
counter.decrement();
console.log(counter.value());
  