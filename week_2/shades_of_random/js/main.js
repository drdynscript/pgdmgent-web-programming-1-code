let cols = 10, rows = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  
  stroke(255);
  strokeWeight(4);
}

function draw() {
  const rH = height / rows;
  const rW = width / cols;
  let x = y = 0;

  for(let i = 0; i < cols*rows; i++) {
    fill(...generateRandomColor());
    rect(x, y, rW, rH);

    if((i+1) % cols === 0) {
      y += rH;
      x = 0;
    } else {
      x += rW;
    }
  }  
}

function generateRandomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.round(Math.random()*256);
  const b = Math.round(Math.random()*256);
  return [r, g, b];
}