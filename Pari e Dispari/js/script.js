// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di inserire pari o dispari 
// Chiedo all'utente di inserire un numero da 1 a 5
const userChoice = prompt("Scegli 'pari' o 'dispari'");
let userNumb = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log("L'utente ha scelto:", userChoice);
console.log("L'utente ha giocato:", userNumb);
if (userNumb < 1 && userNumb > 5) {
    alert("Numero non valido");
    userNumb = parseInt(prompt("Dimmi un numero da 1 a 5"));
    console.log(userNumb, "Numero non valido");
}
// Genero un numero random (da 1 a 5) per il computer (funzione)
const computerNumb = generateRndInteger(1, 5);
console.log("Il computer ha giocato:", computerNumb);

// FUNCTION
/**
 * Description
 * @param {Number} min -> minimum limit (1)
 * @param {Number} max -> maximum limit (5)
 * @returns {Number} -> random number between 1 & 5
 */
function generateRndInteger(min, max) {
    const randNumb = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randNumb;
}
// Sommo i due numeri 
const numbersSum = userNumb + computerNumb;
console.log("Somma delle giocate =", numbersSum);
// Stabilisco se la somma è pari o dispari (funzione)
const evenOrOddResult = evenOrOdd();
console.log(evenOrOddResult);
// FUNCTION 
/**
 * Description
 * @param {Number} numbersSum -> somma dei numeri giocati da utente e computer
 * @returns {string} -> if nummbersSum is even or odd
 */
function evenOrOdd () {
    let myEvenOrOdd = "dispari"
    if (numbersSum % 2 == 0) {
        myEvenOrOdd = "pari";
    }

    return myEvenOrOdd;
    
}
// Dichiariamo chi ha vinto 
let winner = "Ha vinto il computer, riprova!";

if (userChoice === evenOrOddResult) {
    winner = "Complimenti hai vinto!"
}

console.log(winner);