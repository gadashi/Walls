let openlist = [];
let closedlist = [];


class Node{
  constructor(thisTile,startTile,endTile,parent){
    this.x = thisTile.x;
    this.y = thisTile.y;
    this.type = thisTile.type;
    this.fValue = Math.abs(thisTile.x-startTile.x) + Math.abs(thisTile.y-startTile.y)
                  + Math.abs(thisTile.x-endTile.x)+Math.abs(thisTile.y-endTile.y)
    ;
    this.parent = parent;
    this.walkable = this.Walkable();
    // console.log(this);
  }

  Walkable(){
      if(this.x <= 0 || this.y <= 0 || this.x >= tileMap.rows ||this.y >= tileMap.cols){
        return false;
      }
      if(this.type.name == "grass" || this.type.name == "gold"){
        return true;
      }
      return false;
  }
}

function findPath(startTile,endTile){
  
  openlist.push(new Node(startTile,startTile,endTile,null));
  let x =0;
  while(x < 10000){
    //find node with lowest f-value
    let minF = openlist[0].fValue;
    let iMin = 0;
    for(let i = 1; i < openlist.length; i++){
      if(openlist[i].fValue < minF){
        minF = openlist[i].fValue;
        iMin = i;
      }
    }

    // console.log(openlist[iMin],iMin);
    let currNode = openlist[iMin];
    openlist.splice(iMin,1);
    if(currNode.x == endTile.x && currNode.y == endTile.y){
      console.log("got it!",currNode);
      let path = [currNode];

      let nextElement;
      while(path[path.length -1].parent != null){
         nextElement = path[path.length -1].parent;
         path.push(nextElement);
      }
      console.log(x);
      return path;
      break;
    }
    closedlist.push(currNode);
    expandNode(currNode,startTile,endTile);
    if(openlist.length == 0){
      break;
    }
    x++;
  }
  return [startTile];

  // console.log(openlist);
  // console.log(closedlist);

}

function expandNode(currNode,startTile,endTile){
  //check 4 neighbours and if they are in closed list
  let x = currNode.x;
  let y = currNode.y;

  let neighbours =[new Node(tileMap.tiles[x-1][y],startTile,endTile,currNode),
                  new Node(tileMap.tiles[x+1][y],startTile,endTile,currNode),
                  new Node(tileMap.tiles[x][y-1],startTile,endTile,currNode),
                  new Node(tileMap.tiles[x][y+1],startTile,endTile,currNode)
                  ];

  for(let node of neighbours){
    // console.log(node);
    if(node.walkable != false){
      let colclosed = false;
      let colopen = false;
      for(let node2 of closedlist){
        if(node.x == node2.x && node.y == node2.y){
          colclosed = true;
        }
      }
      for(let node2 of openlist){
        if(node.x == node2.x && node.y == node2.y){
          colopen = true;
        }
      }
      if(!colclosed){
        if(!colopen){
          openlist.push(node);
        }
      }
    }
    else{
      // console.log(node);
      closedlist.push(node);
    }
  }

}
