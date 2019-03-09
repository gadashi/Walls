class Building{
	constructor(name,supportedTile){
    this.x;
    this.y;
    this.hp;
    this.supportedTile = supportedTile;
    this.name =name;
    this.prize;
    this.level;
		this.effect = eval("this." + name + "()" );
	}

	upgrade(){

	}

	Wall(){
		console.log("build a wall");
		return 1;
	}

	Tower(){
		return 1;

	}

	Mine(){
		let effects = {
			income: 5
		};
		console.log(effects);
		return effects;

	}
}

class Base {
  constructor(){
    this.x;
    this.y;
    this.hp;
    this.income;
    this.supportedTile = "grass";
    this.name ="Base";
    this.prize;
    this.level;
  }

  destroy(){
    ctrl.gameOver();
  }

}

//class Bridge{}
//class Gate{}
