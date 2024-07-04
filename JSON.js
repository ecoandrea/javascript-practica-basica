//JS Nuggets: JSON

// example
let myJSON = {
    "name": {
        "first": "Beau",
        "last": "Carnes"
    },
    "age":33,
    "skills": [ "juggling", "stiltwalking", "coding" ],
    "married": true,
    "superpowers": null
 }

// stringify method lo convierte en un string
let stringified = JSON.stringify(myJSON);
console.log(stringified);


// parse method lo convierte en un objeto
let stringJSON = '{ "name":"Beau", "kids":2,"state":"Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);
