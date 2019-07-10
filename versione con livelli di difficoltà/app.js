var difficulty;

function mineSweeper(difficulty) {

  var mines = []
  var range;

  switch (difficulty) {
    case 0:
      range = 100;
      break;

    case 1:
      range = 80;
      break;

    case 2:
      range = 50;
      break;
  }



  //genera i numeri "minati"
  function generateMines(range) {
    mines = [];
    for (var i = 0; i < 16; i++) {
      var mine = Math.floor(Math.random() * (range - 1) + 1);
      console.log(mine);

      //determino se i numeri esistono già, e se sì, ne genero uno nuovo
      if (mines.includes(mine) === false) {
        mines.push(mine);
        console.log(mines);
      } else {
        console.log("numero doppione! Genero nuovo...");
        i--;
      }
    }
  }

  //il giocatore sceglie i numeri da testare
  function playerChoice(range) {
    var userChoices = [];

    for (var i = 1; i < range + 1; i++) {
      var choice = parseInt(prompt("inserisci un numero da 1 a " + range));

      //testiamo se un numero è già stato immesso e se è valido
      if ((userChoices.includes(choice) === false) && parseInt(choice)) {
        userChoices.push(choice);
        console.log("utente ha scelto: " + choice);
        console.log("numeri scelti fin'ora: " + userChoices);

        if (mines.includes(choice)) {
          alert("hai beccato una mina! Il tuo punteggio:" + userChoices.length);
          i = range + 1;
        }

        if (i === (range - mines.length)) {
          alert("hai vinto!");
        }

      } else if (userChoices.includes(choice)) {
        console.log("numero doppione!");
        i--;

      } else {
        console.log("numero non valido!!");
        i--;
      }
    }
  }

  generateMines(range);
  playerChoice(range);
}

function chooseDiff() {
  var difficulty = -1;

  while (difficulty === -1) {
    var choice = parseInt(prompt("Scegli il livello di difficoltà: 0 per facile, 1 per medio 2 per difficile"));

    switch (choice) {
      case 0:
        console.log("hai scelto la modalità facile");
        difficulty = 0;
        break;

      case 1:
        console.log("hai scelto la modalità media");
        difficulty = 1;
        break;

      case 2:
        console.log("hai scelto la modalità difficile");
        difficulty = 2;
        break;

      default:
        alert("inserisci un numero valido!");
        break;
    }
  }

  return difficulty;

}

difficulty = chooseDiff();
mineSweeper(difficulty);
