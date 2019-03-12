class GameController{
  constructor(){
    //time in seconds
    this.time =0;
    this.dt = 60/1000;
    //start the game with 100 gold
    this.money = 350;
    this.rCost = 0;

    this.mines = [];

    this.sellPercentage = 0.7;
    this.selectedBuilding = "None";

    this.enemies = [];

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
    success = tileMap.tiles[x][y].constructBuilding("Base");
    this.baseTile = tileMap.tiles[x][y];
    //focus Camera
    cam.x = x * cam.tileSize - can.width/2;
    cam.y = y * cam.tileSize - can.height/2;
    }
    console.log(tileMap.tiles[x][y]);
  }

  updateIncome(){
    for(let mine of this.mines){
      this.money += mine.income / 1000/ this.dt;
    }

    this.money -= this.rCost;

  }

  gameOver(){

  }

  createEnemies(){}

}
