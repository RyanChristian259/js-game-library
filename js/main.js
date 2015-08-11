  // console.log('sanity check!');

function Game(title, genre, year){
  this.title = title;
  this.genre = genre;
  this.year = year;
}


Game.prototype.render = function(game){
  for(var name in game) {
  $('#games').append(game[name], ' ');
    }
    $('#games').append('<br>');
};

function GameLibrary(title, games){
    this.title = title;
    this.games = [];
}

GameLibrary.prototype.renderLibrary = function(){
  for(var i =0; i < this.games.length; i ++) {
   $('#gameLibrary').append(this.games[i].title + ' ' + this.games[i].genre + ' ' +this.games[i].year + '<br>');
console.log(this.games[i]);
  }
};

$(document).on('ready', function() {

zeldaLibrary = new GameLibrary('Zelda Games');


  $('form').on('submit', function(e){
    e.preventDefault();
    $('#gameLibrary').html('');
    var game1 = new Game($('.title').val(), $('.genre').val(), $('.year').val());
    zeldaLibrary.games.push(game1);
    zeldaLibrary.renderLibrary();
console.log(zeldaLibrary);
  });




});//documentready













// zeldaLibrary.games.push(zelda1);
// zeldaLibrary.games.push(zelda2);
// zeldaLibrary.games.push(zelda3);
// zeldaLibrary.games.push(zelda4);
// zeldaLibrary.renderLibrary();
// console.log(zeldaLibrary);


// zelda1 = new Game('The Legend of Zelda', 'adventure', 1986);
// zelda2 = new Game('Zelda II, the adventure of link', 'adventure', 1988);
// zelda3 = new Game('A Link to the past', 'adventure', 1988);
// zelda4 = new Game('Links Awakening', 'adventure', 1993);
// zeldaLibrary = new GameLibrary('Zelda Games');















