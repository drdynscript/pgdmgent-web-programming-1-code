let cols = 10, rows = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  
  stroke(0);
  strokeWeight(0);

  noLoop();
}

function draw() {
  const rH = height / rows;
  const rW = width / cols;

  colorMode(RGB);
  let x = y = 0, cV = 0;

  for(let r = 0; r < rows; r++) {
    x = 0;
    for(let c = 0; c < cols; c++) {
      cV = (r*cols+c)*255/(rows*cols);

      fill(color(cV));
      rect(x, y, rW, rH);

      x += rW;
    }
    y += rH;
  }
}