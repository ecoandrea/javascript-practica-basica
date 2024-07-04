

//Array iteration: 8 metodos

//forEach

[1,2,3,4,5,6,7,8,9,10].forEach(function(item, index) {
    console.log(item, index)
});


//map

const eight = [1,2,3,4,5,6,7,8];
const doubled = eight.map(function (item) {
    return item * 2
});
console.log(doubled)


// filter

const ints = [1,2,3,4,5,6,7];
const events = ints.filter(function (item) {
return item % 2 === 0
})

console.log(events)

//reduce

const sum = [1,2,3,4,5,6].reduce(function ( result , item) {
return result + item
}, 0)

console.log(sum)

//some return un booleano

const hasNegativeNumbers = [1,2,3,4,5,6].some(function (item) { 
    return item < 0; })

    console.log(hasNegativeNumbers)

// every todos deben cumplir la condicion

const hasPositiveNumbers = [1,2,3,4,5,6].some(function (item) { 
    return item > 0; })

    console.log(hasPositiveNumbers)

//find si es true lo devuelve, sino lo encuentra es undefined

const objects = [{id:"a"},  {id:"b"},   {id:"c"}]
const found =objects.find(function (item) {
    return  item.id === "b"; 
})

console.log(found)

//find index si es true return el index , sino encuentra return -1

const objects2 = [{id:"a"},  {id:"b"},   {id:"c"}]
const foundIndex =objects2.findIndex(function (item) {
    return  item.id === "d"; 
})

console.log(foundIndex)

