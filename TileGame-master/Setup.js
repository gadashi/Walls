//DO ALL THE BULKY SETUP WORK HERE
var can = document.getElementById("can"),
	 c = can.getContext("2d");

   //create a Camera for displaying
   let cam = new Camera();
   //create a new tilemap
   let tileMap = new TileMap(90,60);
   //create the gamecontroller
   let ctrl = new GameController();
   //start Updateloop
	 let gameLoop = setInterval(updateLogic,1/ctrl.dt);
	 let graphicLoop = setInterval(updateGraphics,1/cam.frameRate);
