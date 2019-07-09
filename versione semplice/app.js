var userChoices = [];
var mines = [];

//genera i numeri "minati"
function generateMines(range){
  var tempArr = [];
  for (var i = 0; i < 16; i++){
    var mine = Math.floor(Math.random() * (range - 1) +1 );
    console.log(mine);

    //determino se i numeri esistono già, e se sì, ne genero uno nuovo
    if (tempArr.includes(mine) === false){
     tempArr.push(mine);
     console.log(tempArr);
    } else {
      i--;
    }
  }
}

 generateMines(100);