// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inseirre un parola 
// const userWord = prompt("Dimmi una parola");
// console.log("Parola scritta dall'utente:", userWord);
// const reverseWord = palindroma();
// console.log("Parola inserita dall'utente al contrario:", reverseWord);

// // FUNCTION 
// /**
//  * Description
//  * @returns {string} // La parola inserita dall'utente al contrario
//  */
// function palindroma () {
//     // Variabili che mi servono
//     let reverseWord = '';
//     // Tasformo la parola al contrario
//     for (let i = userWord.length - 1; i >= 0; i--) {
//         reverseWord += userWord[i];
//     }
//     return reverseWord;
    
// }
// // Variabile se è palindroma o no
// if (reverseWord === userWord) {
//     console.log("La parola inserita è palindroma");
// } else {
//     console.log("La parola inserita non è palindroma");
        
// }

// Correzione 

// 1. Chieo all'utente una parola 
const userWord = prompt("Dimmi una parola");
// 2. Veirificare se la parola è palindroma
//function 
const isUserWordPalindrom = isStringPalindrome(userWord)

// 3. OUTPUT: se la parola è palindroma scrivo "è palindroma", altrimenti scrivo "non è palindroma"
if (isUserWordPalindrom) {
    console.log("è palindroma");
} else {
    console.log("non è palindroma");
}
// FUNCTIONS 
/**
 * Description This function checks if a given word is palindrome and gives true if it is or false otherwise
 * @param {any} stringToCheck -> ant string to check if it is palindrome
 * @returns {Boolean} -> true if is palindrome, false otherwise
 */
function isStringPalindrome(stringToCheck) {

    // 1. Rovesciare la parola
    let reverseString = "";

    for (let i = stringToCheck.length -1; i >= 0; i--) {
        const thisChar = stringToCheck[i];
        reverseString += thisChar;
        console.log(reverseString);
    }
    // 2. Confronto la parola originale con quella rovesciata
    let isPalindrome = false;
    if (reverseString === stringToCheck) {
        isPalindrome = true;
    }

    return isPalindrome;
}




