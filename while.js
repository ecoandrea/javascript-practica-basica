//While, Do While 
//WHILE primero evalúa la condición y luego se ejecuta el código
// DO WHILE se ejecuta primero el código y luego se evalúa si se cumple la condició

let n = 0;

while (n < 5) {
  n++;
  
//if (n == 3) continue
// console.log("n = " + n)

  if (n == 3) break;
  console.log("n = " + n);
}

let i = 0;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);

// &turn_off_js=true