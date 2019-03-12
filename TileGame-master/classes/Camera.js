class Camera{

	//should later be used for drawing and moving the camera

	constructor(){
		this.frameRate = 60;
		this.x = 87;
		this.y = 50;
    this.tileSize = 20;
		this.camSpeed=200;
		this.zoomSpeed=1;
    this.dx = 0;
    this.dy = 0;
		this.minTileSize = 12;
		//this.maxCanSizex = 600;
		//this.maxCanSizey = 400;
	}

	Update(){
		this.moveCam();
		this.drawScreen();
	}

	moveCam(){
    //console.log(this.dx,this.dy,this.x,this.y);
    //visual bugs at border
		this.x +=  this.dx * this.camSpeed / this.tileSize /this.frameRate * 25;
		this.y +=  this.dy * this.camSpeed / this.tileSize/ this.frameRate* 25;
    if((this.x < 0 && this.dx<0) || (this.x > tileMap.rows * this.tileSize - can.width && this.dx >0)){
      this.x -= this.dx * this.camSpeed/this.tileSize * 25 /this.frameRate;
    }
    if((this.y < 0 && this.dy<0)|| (this.y > tileMap.cols * this.tileSize - (can.height +1) && this.dy>0)){
      this.y -=  this.dy * this.camSpeed/ this.tileSize * 25 /this.frameRate;
    }
	}

	zoomCam(z){
		//changeTilesize
		let dz= z / 2.5 * this.zoomSpeed;
		this.tileSize -= dz;
		if(this.tileSize < this.minTileSize){this.tileSize = this.minTileSize}
		else{
			//center now:
			//let cx= (this.x + can.width/2) / this.tileSize;
			//let cy= (this.y + can.height/2) / this.tileSize;
		}
		//keep the current center

	}

	drawTile(x,y,type){
    //draw sprites not colors and attach sprites to tiles
				if(type == "grass"){c.fillStyle = "green";}
				else if(type == "water"){c.fillStyle = "blue";}
				else if(type == "gold"){c.fillStyle = "gold";}
				c.fillRect(x * this.tileSize - this.x,y * this.tileSize - this.y,this.tileSize,this.tileSize);
  }


  drawBuilding(x,y,name){

    	// draw sprites not colors
      if(name == "Base"){c.fillStyle = "red";}
      else if(name == "Wall"){c.fillStyle = "Grey";}
      else if(name == "Mine"){c.fillStyle = "yellow";}
      else if(name == "Tower"){c.fillStyle = "white";}
      c.fillRect(x * this.tileSize - this.x,y * this.tileSize - this.y,this.tileSize,this.tileSize);

  }

	drawEnemy(x,y,size){
		c.beginPath();
		c.arc(x * this.tileSize - this.x,y * this.tileSize - this.y,size * this.tileSize, 0, 2 * Math.PI);
		c.fillStyle = "red";
		c.fill();
	}

	drawPath(x,y){
		c.fillStyle = "cyan";
		c.fillRect(x * this.tileSize - this.x,y * this.tileSize - this.y,this.tileSize*0.9,this.tileSize*0.9);
	}

  //create menu overlay
  drawSelector(){
    c.fillStyle = "black";
    c.fillRect(0,can.height - 75, can.width,75);
  }

  drawScreen(){
		c.fillStyle = "white";
		c.fillRect(0,0,can.width,can.height);
    let startTx = Math.floor(this.x/this.tileSize),
        maxTx = Math.floor((this.x + can.width)/this.tileSize);
    let startTy = Math.floor(this.y/this.tileSize),
        maxTy = Math.floor((this.y + can.height)/this.tileSize);
    for(var i = startTx;i<=maxTx;i++){
      for(var j = startTy;j<=maxTy;j++){
        // console.log(i,j,tileMap.tiles[i][j]);
				if(i < tileMap.rows && j < tileMap.cols && i>0 && j > 0){
        	let t =  tileMap.tiles[i][j];
        	this.drawTile(t.x,t.y,t.type.name);
					if(t.building != null){
						this.drawBuilding(t.x,t.y,t.building.name);
					}
				}
      }
    }

		for(let enm of ctrl.enemies){
			if(enm.x > startTx && enm.x < maxTx && enm.y > startTy && enm.y < maxTy){
				this.drawEnemy(enm.x,enm.y,enm.size);
			}
		}

		for(let path of myPath){
			if(path.x > startTx && path.x < maxTx && path.y > startTy && path.y < maxTy){
				this.drawPath(path.x,path.y);
			}
		}
		//draw UI
		c.font = "30px Arial";
		c.fillStyle = "black";
		c.fillText(Math.floor(ctrl.money), 10, 50);

  }
}
