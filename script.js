"use strict";

let pippo = "ciao";

let pluto = 4;
console.log("🚀 ~ file: script.js ~ line 6 ~ pluto", pluto);

let paperino = false;
console.log("🚀 ~ file: script.js ~ line 8 ~ paperino", paperino); //crtl+alt+l


let array = ["pippo", "pluto", "paperino"];
console.table(array)


let stud1 = {name: "Andrea", age: 12};

let stud2 = {name: "Giovanni", age: 13};

let stud3 = {name: "Beatrice", age: 16};

let stud4 = {name: "Veronica", age: 12};

const array2 = [stud1, stud2, stud3, stud4];

console.table(array2);


function checkIfIsEven(NumberToCheck) {
    return NumberToCheck % 2 === 0;
}

//controllo se è pari
function check(n) {
    return n % 2 === 0;
}


let player = {name: "Andrea", surname: "Asioli", school: "Leopardi",  game: "Space Invader", age: 12, address: "Via Piantelli 12", score: 112};

console.log("🚀 ~ file: script.js ~ line 41 ~ player", player);

console.log("🚀 ~ file: script.js ~ line 41 ~ player", JSON.stringify(player));

let number = 300;

let isEven = checkIfIsEven(number);

player.score = 200;

class EmptyStringError extends Error{
    constructor(message){
        super(message);
    }
}

class InvalidStringError extends Error{
    constructor(message){
        super(message);
    }
}


function parseStringToNumber(string){
    if (string.length === 0) {
        throw new EmptyStringError ("ciao");
    }
    let stringNumber = string;
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");
    }
    const number = parseFloat(stringNumber);
    if (isNaN(number)){
    
        throw new InvalidStringError("stringa non valida");
    }
    return number;
}

let age;

try {

    age = parseStringToNumber("");
    console.log("age: ", age);

} catch (error) {

    if (error instanceof EmptyStringError) {
        age = 0;
        console.log("age: ", age);
    }else{
        console.log(error.message);
        console.log("inserisci di nuovo");
    }

    // if (error.message === "stringa vuota") {
    //     age = 0;
    //     console.log("age: ", age);

    // } else {
    //     console.log(error.message);
    //     console.log("inserisci di nuovo");
    // }
    
}





// if (isNaN(age)) {
//     console.log("non sono riuscito a convertire");
// } else{
//     console.log("age", age);
// }

// console.log(parseStringToNumber("2"));
// console.log(parseStringToNumber("2.1"));
// console.log(parseStringToNumber("2,1"));
// console.log(parseStringToNumber("2pippo"));
// console.log(parseStringToNumber("pippo"));
