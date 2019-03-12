class Enemy{
//enemies: 1. finde nächste Mine oder Base
// 2. berechne Weg dorthin
// 3. wenn Mauer oder Mine --> angreifen
//enemies bewegen sich auf Tilemap, können aber auch zwischen ihnen stehen: (3.14,2.71)

  constructor(level, type, posX, posY){
    this.level = level;
    this.type = type;
    this.x = posX;
    this.y = posY;
    this.hp;
    this.dmg;
    this.size = 0.2;
    this.moveSpeed = 0.1;
    this.range = 1;
    this.target = null;
    this.findTarget();

  }

  update(){
    if(this.target != null ){
      let targetDistance =Math.sqrt(Math.pow(this.x -this.target.x,2) +Math.pow(this.y -this.target.y,2));
      if(targetDistance > this.moveSpeed || targetDistance > this.range){
      let dx = (this.target.x - this.x)/targetDistance;
      let dy = (this.target.y - this.y) / targetDistance;
      this.x += dx *  this.moveSpeed;
      this.y +=dy *  this.moveSpeed;
    }
    }

    //this.findTarget();
  }

  findTarget(){
    //initialize c as distance to Base
    let c = Math.sqrt(Math.pow(this.x-ctrl.baseTile.x,2)+Math.pow(this.x-ctrl.baseTile.x,2));
    let tgt = ctrl.baseTile;
    for(var i = 0; i<ctrl.mines.length;i++){
      let d = Math.sqrt(Math.pow(this.x-ctrl.mines[i].x,2)+Math.pow(this.x-ctrl.mines[i].x,2));
      if(d<c){
        c=d;
        tgt = ctrl.mines[i].pTile;
      }
    }
    this.target = tgt;
  }

  goToTarget(){

  }

  checkColl(){
    let currentTile = tileMap.tiles[Math.floor(this.x)][Math.floo(this.y)];
    if(currentTile.building.name != "None"){
      //moved on occupied square
      attackTarget(currentTile);
      return true;
    }
    return false;
  }

  attackTarget(target){
    target.building.hp -= this.dmg;
    if(target.building.hp <=0){
      target.building.effect.onDestroy(this);
      target.building = new Building("None");
      this.target = null;
    }
  }
}
