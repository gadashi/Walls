class TileMap{

//TileMap creates a specified number of Tiles and stores them in Array
//responsible for the Map

	constructor(rows,cols){
		this.rows = rows;
		this.cols = cols;
		this.tiles = [];
		this.initializeTiles();
	}


	initializeTiles(){

		//have a max canvas size like 500px,600px depending on screen size

		can.width = 900;
		can.height = 600;

		for(var i=0;i<this.rows;i++){
			this.tiles.push([]);
			for(var j=0;j<this.cols;j++){
				this.createTile(i,j);
			}
		}


		let nrGold = Math.floor(Math.sqrt(this.rows * this.cols));
		for(var i=0;i<nrGold;i++){
			let goldSpot = false;

			while(!goldSpot){
				let maxX = this.rows, maxY = this.cols;
				let x = 0, y = 0;
				x = Math.floor(Math.random() * maxX);
				y = Math.floor(Math.random() * maxY);
				if(this.tiles[x][y].type != "gold"){
					goldSpot = true;
					this.tiles[x][y].changeType("gold");
				}
			}
		}

	}

	createTile(x,y){
		//create a specified number of gold Tiles -> sqrt(#tiles)?
		let r = Math.random();
		let t = "grass";
		if(r > 0.8){t = "water";}
		this.tiles[x].push(new Tile(x,y,t));


	}
}
