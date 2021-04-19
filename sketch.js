var gamestate = 0
var playerCount = 0
var dataBase,player,game,form

function setup(){
  createCanvas(400,400);
  dataBase = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

function draw(){

}

