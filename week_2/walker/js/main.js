let x1 = 0, y1 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  x1 = width/2;
  y1 = height/2;
  
  stroke(255);
}

function draw() {
  
  const mode = 1+Math.floor(Math.random()*4);
  let dx = 1+Math.round(Math.random()*6);
  let dy = 1+Math.round(Math.random()*6);
  
  switch(mode) {
    case 1: default: dx*= 1;dy = 0;break;
    case 2: dx*=-1;dy = 0;break;
    case 3: dy*=1;dx = 0;break;
    case 4: dy*=-1;dx = 0;break;
  }
  line(x1, y1, x1+dx, y1+dy);
  x1 += dx;
  y1 += dy;
}