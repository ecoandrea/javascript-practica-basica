//Ramdom number & parseInt

//Math.random da numero aleatorio
console.log(Math.random())

//Math.floor lo redondea, devuelve  máximo entero menor o igual a un número
console.log(Math.floor(Math.random() * 20))


//con esta formula da un numero dentro de los parametros dados

function randomRange(min, max) {

    return Math.floor(Math.random() *  (max - min + 1)) + min
}

console.log(randomRange(1, 9))



//Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

console.log(parseInt("007")) //devuelve en un numero
console.log(parseInt("028")) //devuelve 28
console.log(parseInt("t007")) // devuelve NaN por la T
console.log(parseInt("11", 2)) // devuelve 3 porq suma 11 lo toma com 1 y 1

