let tx = 0, ty = 0;

function setup() {
  createCanvas(400, 400);

  loadPixels();
  
  tx = 0;
  for(let y = 0;y < height;y++) {
    ty = 0;
    for(let x = 0;x < width;x++) {
      const brightness = floor(map(noise(tx, ty),0,1,0,255));
      pixels[x+y*width] = color(150,0,0);
      ty+= 0.01;
    }
    tx+= 0.01;
  }
  updatePixels();
}

function draw() {
  console.log(pixels);
}