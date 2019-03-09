class GameController{



  constructor(){
    //start the game with 100 gold
    this.money = 100;
    this.initializeGame();
    this.selectedBuilding = null;
    this.enemies = [];
    this.base;
    this.mines = [];
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
    success = tileMap.tiles[x][y].constructBuilding(new Base(x,y));
    this.base = tileMap.tiles[x][y];
    }
    console.log(tileMap.tiles[x][y]);
  }

  gameOver(){

  }

  createEnemies(){}

}
