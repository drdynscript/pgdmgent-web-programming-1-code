let tx = 0, ty = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(0); 
  noStroke(); 
  fill(255, 255, 255, 10);

  ty = 100000;
}

function draw() {
  //background(0);  
  tx += 0.01;
  ty += 0.01;
  const x = noise(tx) * width;
  const y = noise(ty) * height;
  ellipse(x, y, 50, 50);
}