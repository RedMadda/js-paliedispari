// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma



// inizio funzione
function checkPal(word) {
    word = word.toLowerCase();
    for (var i = 0; i < word.length/2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
          return false;
      }
    }
    return true;
   }
     
    // inserire parola
    
    var parola = prompt("Inserisci una parola.");
    
    var controllo = checkPal(parola);
    console.log(controllo);
    
    