//Object entidad independiente con propiedades y tipos
// se accede usando punto . o bracket []


let myCar = new Object();
myCar.make = " Ford"
myCar.model = "Mustang"
myCar.color
console.log(myCar.make)
console.log(myCar.color)

myCar["year"] = 1969
console.log(myCar["model"])

myCar["Do I like?"] = " I hate my car"
console.log(myCar["Do I like?"])


//hasOwnProperty  devuelve un booleano indicando si el objeto tiene la propiedad especificada. 

function showProps(obj, objName) {
    let result = ""
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + obj[i] + "\n"
        }
    }
    return result
}

console.log(showProps(myCar, "myCar"))


// creation : object initializer

let myHonda = {color: 'red', wheels:4, engine: {cylinder: true, size: 2.3}}

// creation: construction function

function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

// creation: object.create

let myCar2 = new Car ("Chevy", "Malibu", 1993)
let anothercar = new Car("Mazda", "Miata", 1990)
console.log(myCar2.model)

myCar.color = "green"
console.log(myCar2.color)


  
 
  
  // rceation: Object.create
  let Animal = {
    type: "Invertebrates", 
    displayType: function() {  
      console.log(this.type);
    }
  }
  
  let animal1 = Object.create(Animal);
  animal1.displayType(); 
  
  let fish = Object.create(Animal);
  fish.type = "Fishes";
  fish.displayType();

  //OBJECTS

  //Using Object for Lookups

  let alpha = {
    1: "Z",  
    2: "Y",
    3: "x",
    4: "W",
  }
  console.log(alpha[2])
  
  //Remove Object for Properties


  let dishes = {
    plates:8,
    cups:10,
    forks:28,
    bowls:13 
  }
  delete dishes.cups
  console.log(dishes)

  //Testing Objects for Properties
    //hasOwnProperty devuelve un booleano si existe o no (true/false)

  console.log(dishes.hasOwnProperty("plates"))
  console.log(dishes.hasOwnProperty("cups"))

  //Accessing and Modifying Nested Objects

  let ourStorage = {
    "desk": {
        "drawer": "stapler"
    },


    "cabinet": {
        "top drawer": { 
          "folder1": "a file",
          "folder2": "secrets"
        },
        "bottom drawer": "soda"
      }
    };

console.log(ourStorage.cabinet["top drawer"].folder2)
console.log(ourStorage.desk.drawer)
ourStorage.cabinet["top drawer"].folder2 = "cake recipe"
console.log(ourStorage.cabinet["top drawer"].folder2)
  
// Generate an Array of All Keys

console.log(Object.keys(ourStorage)) //da el 1er nivel
