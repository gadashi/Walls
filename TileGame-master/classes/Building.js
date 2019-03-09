class Building{
	constructor(name,supportedTile){
    this.x;
    this.y;
    this.hp;
    this.supportedTile = supportedTile;
    this.name =name;
    this.prize;
    this.level;
	}
}

class Wall{
	constructor(){
    this.x;
    this.y;
    this.hp;
    this.supportedTile = "grass";
    this.name ="Wall";
    this.prize;
    this.level;
	}
}

class Tower{
  constructor(){
    this.x;
    this.y;
    this.hp;
    this.income;
    this.supportedTile = "grass";
    this.name ="Tower";
    this.prize;
    this.level;
    }
  }

class Mine{
  constructor(){
  this.x;
  this.y;
  this.hp;
  this.income;
  this.supportedTile = "gold";
  this.name ="Mine";
  this.prize;
  this.level;
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
