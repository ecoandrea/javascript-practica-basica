
//push agrega al final

let arr = ["a", "b", "c", "d", "e"];

arr.push("z");
console.log(arr)

// pop elimina el último elemento y lo devuelve, cambia la longitud del array


let arr2 = ["a", "b", "c", "d", "e"];
console.log(arr2.pop())
console.log(arr2)

//

let arr3 = ["f", "g"];

console.log(arr.concat(arr3))
console.log(arr3)

//join  crea un string sin modificar el array original

console.log(arr.join("!!"))

//reverse invierte el orden

console.log(arr.reverse())
console.log(arr)


//shift remueve el primer elemento y devuelve ese elemento
let arr5 = ["a", "b", "c", "d", "e"];

console.log(arr5.shift())
console.log(arr5)

//unshift agrega el elemento al principio delarray y devuelve la longitud modificada

let arr6 = ["a", "b", "c", "d", "e"];
console.log(arr6.unshift("j"))
console.log(arr6)

//slice  devuelve  copia de parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

let arr7 = ["a", "b", "c", "d", "e"];
console.log(arr7.slice(1,3))

//sort ordena

const arr8  = ["a", "g", "x", "d", "m"];

arr8.push("k");
arr8.push("f");
arr8.sort();
console.log(arr8);

//splice cambia  contenido del array eliminando  los elementos existentes por  nuevos
//primer argument es el star index, 2do cuantos se quitan, 3ro lo que se agrega

let arr9  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(arr9.splice(2, 2, "Javascript"))
console.log(arr9)


//coping arrays
let original = [true, true, false,  undefined, false, null]

//slice
let copy1 = original.slice(0)

//spread operator
let copy2 = [...original]
console.log(copy1, copy2)

//no funciona en array dentro de arr        ay 

//DEEP coping
let deepArray = [["Javascript"]]
let shallowCopy = deepArray.slice(0)

//shallowCopy[0].push(" is great!!");
//console.log(deepArray[0], shallowCopy[0])


// forma mas facil

let deepCopy = JSON.parse(JSON.stringify(deepArray))

deepCopy[0].push(" is great!!");
console.log(deepArray[0], deepCopy[0])