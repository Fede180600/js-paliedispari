// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di inserire pari o dispari 
// Chiedo all'utente di inserire un numero da 1 a 5
const userChoice = prompt("Scegli 'pari' o 'dispari'");
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log("L'utente ha scelto:", userChoice);
console.log("L'utente ha giocato:", userNumber);
// Genero un numero random (da 1 a 5) per il computer (funzione)
const computerNumb = generateRndInteger(1, 5);
console.log("Il computer ha giocato:", computerNumb);
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

// Stabilisco se la somma è pari o dispari (funzione)

// Dichiariamo chi ha vinto 