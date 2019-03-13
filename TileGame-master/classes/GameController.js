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

    this.baseTile;

  }

  initializeGame(){
    //create the Base
    let success = false;
    let rdm;

    let counter = 0;

    while(!success && counter < 1000){
      rdm = randomPlace();
      success = tileMap.tiles[rdm[0]][rdm[1]].constructBuilding("Base");
    }
    this.baseTile = tileMap.tiles[rdm[0]][rdm[1]];
    console.log(tileMap.tiles[rdm[0]][rdm[1]]);

    //focus Camera
    cam.x = rdm[0] * cam.tileSize - can.width/2;
    cam.y = rdm[1] * cam.tileSize - can.height/2;

    // console.log(tileMap.tiles[rdm[0]][rdm[1]]);
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
