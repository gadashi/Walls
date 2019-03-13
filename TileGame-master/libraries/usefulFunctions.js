function randomPlace(){


  function map(value, minA, maxA, minB, maxB) { return (1 - ((value - minA) / (maxA - minA))) * minB + ((value - minA) / (maxA - minA)) * maxB; }
  x = Math.floor(map(Math.random(),0,1,tileMap.rows/4,3/4*tileMap.rows));
  y = Math.floor(map(Math.random(),0,1,tileMap.cols/4,3/4*tileMap.cols));
  // this.baseTile = tileMap.tiles[x][y];

  return [x,y];
}
