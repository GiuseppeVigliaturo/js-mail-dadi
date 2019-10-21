var email;
var lista =["a", "b", "c", "d"];
console.log(lista);

//chiedo all'utente di inserire la sua mail
email = prompt("inserisci la tua mail")
console.log(email);

var trovato = false;
for (var i= 0; i < lista.length; i++)
{
  console.log(lista[i], i);
  if (email == lista[i]) {
    trovato = true;
    console.log("email trovata", i);

  }
}

if (trovato == true)
{
  console.log("La tua mail è nella lista puoi accedere");
}
else {
console.log("La tua mail non è nella lista non puoi accedere");
}
