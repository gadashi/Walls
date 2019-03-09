class GameController{
  constructor(){
    //time in seconds
    this.time =0;
    this.dt = 60/1000;
    //start the game with 100 gold
    this.money = 200;
    this.sellPercentage = 0.7;
    this.selectedBuilding = null;
    this.enemies = [];
    this.base;
    this.mines = [];
    this.towers = [];
    this.walls = [];
    //createEnemies(5);

  }

  initializeGame(){
    //create the Base
    let success = false;
    let x, y;
    while(!success){

    function map(value, minA, maxA, minB, maxB) { return (1 - ((value - minA) / (maxA - minA))) * minB + ((value - minA) / (maxA - minA)) * maxB; }
    x = Math.floor(map(Math.random(),0,1,tileMap.rows/4,3/4*tileMap.rows));
    y = Math.floor(map(Math.random(),0,1,tileMap.cols/4,3/4*tileMap.cols));
    success = tileMap.tiles[x][y].constructBuilding(new Building("Base","grass"));
    this.base = tileMap.tiles[x][y];
    }
    console.log(tileMap.tiles[x][y]);
  }


  gameOver(){

  }

  createEnemies(){}

}
