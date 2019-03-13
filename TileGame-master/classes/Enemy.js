class Enemy{
//enemies: 1. finde nächste Mine oder Base
// 2. berechne Weg dorthin
// 3. wenn Mauer oder Mine --> angreifen
//enemies bewegen sich auf Tilemap, können aber auch zwischen ihnen stehen: (3.14,2.71)

  constructor(level, type, posX, posY){
    this.level = level;
    this.type = type;
    this.hp;
    this.dmg;
    this.size = 0;
    this.range = 1;

    this.transform = new playerMove(posX,posY);
  }

  update(){
    this.transform.Move();
    //this.findTarget();
  }

  goToTarget(){

  }

  // checkColl(){
  //   let currentTile = tileMap.tiles[Math.floor(this.x)][Math.floo(this.y)];
  //   if(currentTile.building.name != "None"){
  //     //moved on occupied sq.type.name
  //     attackTarget(currentTile);
  //     return true;
  //   }
  //   return false;
  // }

  // attackTarget(target){
  //   target.building.hp -= this.dmg;
  //   if(target.building.hp <=0){
  //     target.building.effect.onDestroy(this);
  //     target.building = new Building("None");
  //     this.target = null;
  //   }
  // }
}

class playerMove{
  constructor(posX,posY){
    this.x = posX;
    this.y = posY;

    this.moveSpeed = 0.04;
    this.target = this.findTarget();
    this.startRoute();

    this.route = [];

  }

  Move(){
    //console.log(this);
    if(this.target != null ){
      let targetDistance =Math.sqrt(Math.pow(this.x -this.target.x,2) +Math.pow(this.y -this.target.y,2));
      if(targetDistance > this.moveSpeed){
      let dx = (this.target.x - this.x)/targetDistance;
      let dy = (this.target.y - this.y) / targetDistance;
      this.x += dx *  this.moveSpeed;
      this.y +=dy *  this.moveSpeed;
    }
    }
  }

  findTarget(){
    //initialize c as distance to Base
    let c = Math.sqrt(Math.pow(this.x-ctrl.baseTile.x,2)+Math.pow(this.x-ctrl.baseTile.x,2));
    let tgt = ctrl.baseTile;
    for(var i = 0; i<ctrl.mines.length;i++){
      let d = Math.sqrt(Math.pow(this.x-ctrl.mines[i].x,2)+Math.pow(this.x-ctrl.mines[i].x,2));
      if(d<c){c=d;tgt = ctrl.mines[i].pTile;}
    }
    return tgt;
  }

  startRoute(){
    myPath = findPath(tileMap.tiles[Math.floor(this.x)][Math.floor(this.y)], this.target);
  }
}
