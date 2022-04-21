// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inseirre un parola 
const userWord = prompt("Dimmi una parola");
console.log("Parola scritta dall'utente:", userWord);

// Tasformo la parola al contrario
for (let i = userWord.length - 1; i >= 0; i--) {
    const elementReverseWord = userWord[i];
    console.log(elementReverseWord);
    
}


