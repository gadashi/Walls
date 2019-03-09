class Tile{

//Tile object gets created and stored by the TileMap object. Holds the values
//off the tile. Can be modified and buidings can be constructed.
//TODO: decide whether draw in extra object

	constructor(posX,posY,type){
		this.x = posX;
		this.y = posY;
		this.type = type;
		this.building = null;
	}

	changeType(newType){
		this.type = newType;
	}

	constructBuilding(building){

    //check for money 'n stuff
    if(building != null){
		  if(this.building == null && this.type == building.supportedTile){
        this.building = building;
				if(this.building.name == "Mine"){
					ctrl.mines.push(this);
				}
        return true;
		  }
    } else if ( building == null){
        this.building = null;
        return true;
    }

    else {
      return false;
    }
	}

  draw(){}

}
