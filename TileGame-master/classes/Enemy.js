class Enemy{
//enemies: 1. finde nächste Mine oder Base
// 2. berechne Weg dorthin
// 3. wenn Mauer oder Mine --> angreifen


  constructor(level, type, posX, posY){
    this.level = level;
    this.type = type;
    this.x = posX;
    this.y = posY;
    this.hp;
    this.dmg;
    this.moveSpeed;
    this.range;
    this.findTarget();
  }

  findTarget(){
    //initialize c as distance to Base
    let c = Math.sqrt(Math.pow(this.x-ctrl.base.x,2)+Math.pow(this.x-ctrl.base.x,2));
    for(var i = 0; i<ctrl.mines.length;i++){
      let d = Math.sqrt(Math.pow(this.x-ctrl.mines[i].x,2)+Math.pow(this.x-ctrl.mines[i].x,2));
      if(d<c){
        c=d;
      }
    }
  }

  goToTarget(){

  }

  attackTarget(){

  }
}
