//DO ALL THE BULKY SETUP WORK HERE
var can = document.getElementById("can"),
	 c = can.getContext("2d");

   //create a Camera for displaying
   let cam = new Camera();
   //create a new tilemap
   let tileMap = new TileMap(90,60);
	 // console.log(tileMap);
   //create the gamecontroller
   let ctrl = new GameController();
	 ctrl.initializeGame();

	 let myPath = [];//findPath(tileMap.tiles[ctrl.baseTile.x][ctrl.baseTile.y],tileMap.tiles[9][15]);


   //start Updateloop
	 let gameLoop = setInterval(updateLogic,1/ctrl.dt);
	 let graphicLoop = setInterval(updateGraphics,1/cam.frameRate);
	 let enemyLoop = setInterval(updateEnemies,1000/30);

	 let rdm = randomPlace();
	 let enemy =new Enemy(1,"melee",rdm[0],rdm[1])
	 ctrl.enemies.push(enemy);

	 let testLoop = setInterval(updatePath,200);

	 function updatePath(){
		 enemy.transform.startRoute();
	 }
