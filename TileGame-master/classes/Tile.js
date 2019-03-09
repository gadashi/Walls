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
			//	console.log(building.effect.prize, ctrl.money);
		  if(this.building == null && this.type == building.supportedTile
				&& ctrl.money > building.effect.prize){
					ctrl.money -= building.effect.prize;
        this.building = building;
				if(this.building.name == "Mine"){
					ctrl.mines.push(this);
					this.building.effect.id = ctrl.mines.length - 1;
					this.building.build();
				}
        return true;
		  }
    } else if ( building == null){
				ctrl.money += this.building.effect.prize * ctrl.sellPercentage;
				if(this.building.name == "Mine"){
					console.log(this.building.genIncome);
					clearInterval(this.building.genIncome);
				}
        this.building = null;

        return true;
    }

    else {
      return false;
    }
	}

  draw(){}

}
