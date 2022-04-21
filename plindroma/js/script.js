// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inseirre un parola 
const userWord = prompt("Dimmi una parola");
console.log("Parola scritta dall'utente:", userWord);
const reverseWord = palindroma();
console.log("Parola inserita dall'utente al contrario:", reverseWord);

// FUNCTION 
/**
 * Description
 * @returns {string} // La parola inserita dall'utente al contrario
 */
function palindroma () {
    // Variabili che mi servono
    let reverseWord = '';
    // Tasformo la parola al contrario
    for (let i = userWord.length - 1; i >= 0; i--) {
        reverseWord += userWord[i];
    }
    return reverseWord;
    
}
// Variabile se è palindroma o no
if (reverseWord === userWord) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita non è palindroma");
        
}






