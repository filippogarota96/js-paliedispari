/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

var utente = prompt('Scegli pari o dispari');
// verifico che l'utente abbia scritto pari o dispari

function pariDispari (odd, even) {
  var even = 'dispari';
  var odd = 'pari';
  if ( utente == odd || utente == even) {
    return utente;
  } else {
    alert('attenzione! inserire pari o dispari')
  }
}

var sceltaUtente = pariDispari()
console.log( "L'utente ha sclto: " + sceltaUtente);
