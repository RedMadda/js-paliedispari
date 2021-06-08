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
    

    // L’utente sceglie pari o dispari 
    var paDi = prompt("Scegli se pari (p), o dispari (d)").toLowerCase();
    
    
    // var semaforo = true;
    if (paDi == "pari" || paDi == "p"){
        paDi = "pari"
    }else if (paDi == "dispari"||  paDi == "d"){
        paDi = "dispari"
     } else {
         var i = 0;
        while ( paDi != "pari" && paDi != "dispari" && paDi != "p" && paDi != "d"){
             paDi = prompt("Attenzione! Devi inserire 'p' per 'pari' e 'd' per 'dispari'! Riprova.")
            //  semaforo = false;
             i++;
         }
    }
    document.getElementById("stampa").innerHTML = "Hai scelto: " + paDi + ";" + "</br>";

    // inserisce un numero da 1 a 5.
    var numUtente = parseInt(prompt("scegli un numero intero da 1 a 5"));
    var i = 0;
    while(numUtente == isNaN || numUtente > 5){
        alert("Mi dispiace, il numero deve essere intero fra 1 e 5!");
        parseInt(prompt("scegli un numero fra 1 e 5"));
        i++
    }
    document.getElementById("stampa").innerHTML += "Hai scelto il numero: " + numUtente + "</br>";

    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
    var numPc = numRandom(1, 5);

    document.getElementById("stampa").innerHTML += "Il tuo avversario ha scelto il numero: " + numPc + "</br>";

    // Sommiamo i due numeri.
    var add = somma(numPc, numUtente);

    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
    if(add % 2 == 0){
        checkPd = "pari";
    } else{
        checkPd = "dispari";
    }
    document.getElementById("stampa").innerHTML += "La somma è " + checkPd + ", uguale a: " + add + "</br>";

    // Dichiariamo chi ha vinto.
    if (paDi == checkPd){
        document.getElementById("stampa").innerHTML += "Hai vinto!!!";
    } else {
        document.getElementById("stampa").innerHTML += "Mi dispiace, hai perso.";
    }
    // funzioni

    function numRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    function somma(a,b){
        return a+b;
    }