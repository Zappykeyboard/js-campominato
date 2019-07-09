var mines= []
var userChoices = [];
//genera i numeri "minati"
function generateMines(range){
  mines = [];
  for (var i = 0; i < 16; i++){
    var mine = Math.floor(Math.random() * (range - 1) +1 );
    console.log(mine);

    //determino se i numeri esistono già, e se sì, ne genero uno nuovo
    if (mines.includes(mine) === false){
     mines.push(mine);
     console.log(mines);
    } else {
      console.log("numero doppione! Genero nuovo...");
      i--;
    }
  }
}

 generateMines(100);

 //il giocatore sceglie i numeri da testare
 for (var i = 1; i < 101; i++){
   var choice = parseInt(prompt("inserisci un numero da 1 a 100"));

   //testiamo se un numero è già stato immesso e se è valido
   if ((userChoices.includes(choice) === false) && parseInt(choice)){
     userChoices.push(choice);
     console.log("utente ha scelto: " + choice);
     console.log("numeri scelti fin'ora: " + userChoices);

     if (mines.includes(choice)){
       alert("hai beccato una mina!");
       i = 101;
     }

   } else if (userChoices.includes(choice)) {
    console.log("numero doppione!");
    i--;
    
   } else {
    console.log("numero non valido!!");
    i--;
   }
 }