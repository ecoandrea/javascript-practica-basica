// ternarios

let age = 15;

if (age >=18) {
    console.log("eres un adulto")
} else {
    console.log("eri un cabro chico/a")
}

 
console.log((age >=18)? "eres un adulto" : "eres menor de edad")


let stop;

age > 18 ? (
    console.log("ok, you can go"),
stop = false 
) : (
console.log("sorry, you are much too young"),
stop = true
);

let firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ?"Access denied" : "Access granted ";      

    console.log(access)


    //switch

    switch (new Date().getDay()) {  
        case 0:
            day = "Sunday";
        case 1: 
        day = "Monday";
        case 2: 
        day = "Tuesday";
    }