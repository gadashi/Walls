//CONTROL THE EXECUTION

function updateLogic(){
	//update game time
	ctrl.time += ctrl.dt;
	//dont update income so often
	ctrl.updateIncome();

}

function updateGraphics(){
	cam.Update();
}
function updateEnemies(){
	for(let e of ctrl.enemies){
		e.update();
	}

}




function autoTileChanger(){
//for testing the possibility to change tiles working :)

	let maxX = tileMap.rows, maxY = tileMap.cols;
	let t = "", x = 0, y = 0, r;
	x = Math.floor(Math.random() * maxX);
	y = Math.floor(Math.random() * maxY);
	r = Math.floor(Math.random() * 3);
	switch(r){
		case 0: t="grass";
			break;
		case 1: t="water";
			break;
		case 2: t="gold";
			break;
	}
	//console.log(tileMap.tiles[x][y]);
	tileMap.tiles[x][y].changeType(t);
	//console.log(tileMap.tiles[x][y]);
}

function autoBuildingContructor(){
	let t = "", x = 0, y = 0, r;
	x = Math.floor(Math.random() * tileMap.rows);
	y = Math.floor(Math.random() * tileMap.cols);
	r = Math.floor(Math.random() * 2);

	if(tileMap.tiles[x][y].type.name == "grass"){
		switch(r){
			case 0: tileMap.tiles[x][y].constructBuilding(new Wall());
				break;
			case 1: tileMap.tiles[x][y].constructBuilding(new Tower());
		}
	}
	else if(tileMap.tiles[x][y].type.name == "gold"){
		tileMap.tiles[x][y].constructBuilding(new Mine());
	}
}
