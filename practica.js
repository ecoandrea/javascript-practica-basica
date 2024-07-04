/*
const numbers = [1, 2, 3, 4, 5]

let group = {
    par: [],
    impar: []
}

//hoy

numbers.forEach(number=> {
    let key = "par"
    if (number % 2 !== 0) {
        key = "impar"
    }

    group[key].push(number)
})

console.log(group)
*/
/*
const numbers = [1, 2, 3, 4, 5]

Object.groupBy(numbers, number => {
    if (number % 2 == 0 ) return "par"
    return "impar"

})

console.log(Object)
*/

//at
/*
const numbers = [1, 2, 3, 4, 5] 

numbers.at(2)
*/

//toReversed NO hace copias profundas, solo superficiales,  se usa structureClone para deep
//... tb es superficial
//JSON.parse(JSON.stringify()) sirve para deep pero tiene sus problemas
/*
const original = [1, 2, 3, 4, 5] 
const reversed = original.toReversed()

console.log(reversed)
console.log(original)

*/

//toSort
// a - b ascendente  b -a descendente

/*
const numbers = [3,8,2,4,10]

const sortedNumbers = numbers.toSorted((a, b) => b - a) ;

//numbers.sort()
console.log({sortedNumbers})
console.log({numbers})

*/
//localCompare para strings

//toSpliced para anadir
//devuelve lo eliminado , modificando el original
//se usa toSpliced

/*
const perros = ["diego", "sammy", "cholita", "flor"]

const result = perros.toSpliced(2, 2, "benji", "perrovejo")


//perros.splice(2, 0, "luchita") //posicion ,borrar, anadir

console.log(result)
console.log(perros)
*/

//.with()
/*
const numbers = [1,2,3]

numbers[0] =2

console.log(numbers)

const array = ["uno", "dos", "tres"]
const indexToChange = 1


const result = array.concat()[indexToChange] = "cuatro"


*/
/*
const result = array.copyWithin(indexToChange, "cuatro")

console.log({original:array})
console.log({result})
*/

//findLast findLastIndex

const numbers = [1, 2, 3, 4, 5, 6]

//muta array original

//numbers.reverse().find(n => n % 2 == 0 )


//
//funciona pero no es optimo
//numbers.toReversed().find (n => n % 2 == 0 )

numbers.findLast(n => n % 2 == 0)

//console.log(numbers)

// asignaciones logicas