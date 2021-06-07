// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma



// inizio funzione
function checkPal(word){
    // rendo tutto minuscolo
    
    word = word.substr(0).toLowerCase();
    
    //  controllo se metà e metà dal centro sono uguali
    
    for (var i = 0; i < word.length/2; i++){
        if(word[i] != word[length -1 -i]){ 
          return false;
        } else if (word[i] == word[length -1 +i]){
            return true;
        }
    }  
    }
    
    // inserire parola
    
    var parola = prompt("Inserisci una parola.");
    
    var controllo = checkPal(parola);
    console.log(controllo);
    
    