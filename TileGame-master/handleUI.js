
addEventListener('mousedown',function(e){startBuild(e);});
addEventListener('mousemove',function(e){moveMouse(e);});
addEventListener('mouseup',function(e){endBuild(e);});
addEventListener('wheel',function(e){zoom(e);});
let mouseX = 0,
    mouseY = 0,
    xCoord = 0,
    yCoord = 0,
    isBuilding = false;


function startBuild(e){
  //get Coordinates of mouse and find the correct Tile
  isBuilding = true;
  var rect = can.getBoundingClientRect();
  mouseX = e.clientX - rect.left,
  mouseY = e.clientY - rect.top;
  xCoord = Math.floor((mouseX+cam.x)/cam.tileSize);
  yCoord = Math.floor((mouseY+cam.y)/cam.tileSize);
  let tile = tileMap.tiles[xCoord][yCoord];
  tile.constructBuilding(ctrl.selectedBuilding);
}

function moveMouse(e){
  if(isBuilding){
  var rect = can.getBoundingClientRect();
  mouseX = e.clientX - rect.left,
  mouseY = e.clientY - rect.top;
  let newxCoord = Math.floor((mouseX+cam.x)/cam.tileSize);
  let newyCoord = Math.floor((mouseY+cam.y)/cam.tileSize);
  if(!(newxCoord == xCoord && newyCoord == yCoord)){
    //new tile
    //console.log(xCoord,yCoord,newxCoord,newyCoord);

    xCoord = newxCoord;
    yCoord = newyCoord;
    let tile = tileMap.tiles[xCoord][yCoord];
    tile.constructBuilding(ctrl.selectedBuilding);
  }
  }
}

function endBuild(e){
  isBuilding = false;
}

function zoom(e){
  cam.zoomCam(e.deltaY);

}

let keyListener = addEventListener ('keydown', function(e){
	switch(e.keyCode){
		case 49: ctrl.selectedBuilding = "Wall";
			break;
		case 50: ctrl.selectedBuilding = "Tower";
			break;
		case 51: ctrl.selectedBuilding = "Mine";
			break;
		case 52: let enm = new Enemy(1,"melee",12,15); ctrl.updateIncome();//4
			break;
		case 57:ctrl.selectedBuilding = "None";
			break;
    case 87: cam.dy = -1;//w
  		break;
    case 65: cam.dx = -1;//a
      break;
    case 83: cam.dy = 1;//s
      break;
    case 68: cam.dx = 1;//d
  		break;
	}
 //console.log(ctrl.selectedBuilding);
});

let keyUp = addEventListener ('keyup', function(e){
  switch(e.keyCode){
    case 87: cam.dy = 0;//w
  		break;
    case 65: cam.dx = 0;//a
      break;
    case 83: cam.dy = 0;//s
      break;
    case 68: cam.dx = 0;//d
  		break;
  }
});
