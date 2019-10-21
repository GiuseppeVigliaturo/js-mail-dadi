//dichiaro le variabili
var player,punteggio,avversario;
//chiedo al giocatore il suo nome
player = prompt("Buongiorno giocatore inserisci il tuo nome")


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
punteggio =getRndInteger(1,6);

//stampo il messaggio di benvenuto è il risultato
document.getElementById("puntiplayer").innerHTML = "Ciao" + player + "  Il risultato del tuo lancio è: " + punteggio;

//stampo il punteggio del lancio ottenuto dal pc
avversario =getRndInteger(1,6);
document.getElementById("puntipc").innerHTML = "il punteggio ottenuto dal tuo avversario è: " + avversario;

if (punteggio > avversario) {
  document.getElementById("risultato").innerHTML = "Complimenti hai vinto" + player;
} else if (punteggio == avversario) {
  document.getElementById("risultato").innerHTML = "Pareggio";
}
else {
  document.getElementById("risultato").innerHTML = "Ritenta sarai più fortunato";

}
