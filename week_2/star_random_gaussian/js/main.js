const distribution = new Array(360);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for(let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0, Math.min(width/2, height/2)));
  }
  console.log(distribution.toString());
}

function draw() {
  stroke(255);

  translate(width / 2, width / 2);
  for (let i = 0; i < distribution.length; i++) {
    rotate(TWO_PI / distribution.length);
    let dist = abs(distribution[i]);
    //line(0, 0, dist, 0);
    point(dist, 0);
  }

}