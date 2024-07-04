//funcion primer orden , se puede mandar como parametro de otra funcion

const fn = (a) => "soy una funcion " +a
console.log(fn("llamada fn"))

//funcion de orden superior
// puede recibir una funcion de primer orden guardada en una variable y se puede mandar en un parametro
//parametro va por referencia no por clon

const fn2 = (f, some) => {
    console.log("algo pasa aqui")
    console.log(f(some))
}
fn2(fn, "que se llama desde otra funcion")

//funcion pura no tiene efectos colaterales
//dados mismos parametros de entrada, siempre retorna la misma salida

let beer = {
    name: 'Corona',
}

//si se pasa como parametro se modifica por eso se usa structureClone
/*
function insertAlcohol(b, quantity){
    b.alcohol = quantity
    return b

}
*/

function insertAlcohol(b, quantity){
    let beer = structuredClone(b)
    beer.insertAlcohol = quantity
    return beer
}

console.log(beer)
console.log(insertAlcohol(beer, 7.5))
console.log(beer)


//No es pura porque varia cd vez que se ejecuta

const getTomorrow = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
}



// lo recibe pero por fuera 
const getTomorrowPure = (date) => {
    const tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow

    
}
const myDate = new Date('2024-06-29 00:00:01')

console.log(getTomorrow())
console.log(getTomorrowPure(myDate))


//imperativa 

const numbers = [2,3,5,1,9,8,3,3,2,3]
const number = 3
let quantity= 0

for(const n of numbers){
    if(n === number){
        ++quantity
    }
}

console.log(quantity)

//declarativa filter es funcion de orden superior
//n representa la singularidad , el parametro

let quantity2 = numbers.filter(n=> n === number).length
console.log(quantity2)


//*2

const numbers2 = [2,3,5,1,9,8,3,3,2,3]
const numbersX2 = []

//forma imperativa
for (const n of numbers2){
    numbersX2.push(n*2)
}
console.log(numbersX2)

//forma declarativa

const numbers2D = numbers.map(n => n*2)
console.log(numbersX2)
console.log(numbers2)