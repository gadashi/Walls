class Tile{

//Tile object gets created and stored by the TileMap object. Holds the values
//off the tile. Can be modified and buidings can be constructed.
//TODO: decide whether draw in extra object
	constructor(posX,posY,type){
		this.x = posX;
		this.y = posY;
		this.type = new Type(type);
		this.building = new Building("None");

	}

	changeType(newType){
		this.type = new Type(newType);
	}

	constructBuilding(name){
		let building = new Building(name);
			if(this.building.name == "None" && this.type.name == building.supportedTile){
				if(ctrl.money >= building.effect.prize){
					ctrl.money -= building.effect.prize;
					this.building = building;
					this.building.pTile = this;
					this.building.effect.onBuild(this);
					return true;
				}
			}
			else if(building.name == "None" && this.building.name != "Base"){
				this.building.effect.onDestroy();
				ctrl.money += this.building.effect.prize * ctrl.sellPercentage;
				this.building = building;
			}
			return false;
	}

  draw(){}

}

class Type{
	constructor(typename){
		this.name = typename;
		this.walkable = this.isWalkable(typename);
	}

	isWalkable(typename){
		switch(typename){
			case "water": return false;
			case "grass": return true;
			case "gold": return true;
			default: return false;
		}
	}
}
