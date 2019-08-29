let r = 10, x = r, y = r, xSpeed = 1, ySpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke(255);

  xSpeed = 1+Math.floor(random(0, 6));
  ySpeed = 1+Math.floor(random(0, 6));
}

function draw() {
  background(0);

  x += xSpeed;
  y += ySpeed;

  if((x > (width - r)) || (x < (0 + r))) {
    xSpeed *= -1;
  }

  if((y > (height - r)) || (y < (0 + r))) {
    ySpeed *= -1;
  }

  ellipse(x, y, r, r);
}