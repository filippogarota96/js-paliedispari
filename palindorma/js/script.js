/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

// chiedo all'utente di inserire una Parola

var parola = prompt('Inserisci una parola');






// creo la funzione per verificare se la parola è palindroma

function palindroma (word, wordReverse) {
  for (var i = 0; i < parola.length; i++) {
    word = parola[i];
  }
  for (var i = parola.length - 1; i >= 0; i-- ) {
    wordReverse = parola[i];
  }
  if (word == wordReverse) {
    return parola = 'La parola è palindroma';
  } else {
    return parola = ' La parola non è palindroma';
  }
}

var parolaPalindroma = palindroma();

console.log(parolaPalindroma);
