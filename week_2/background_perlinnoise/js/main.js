function setup() {
  createCanvas(400, 400);

  loadPixels();
  
  let tx = 0, ty = 0, i = 0, brightness = 0;

  loadPixels();
  let d = pixelDensity();
  let size = 4 * (width * d) * (height * d);
  console.log(size);
  /*for (let i = 0; i < size; i += 4) {
    
    pixels[i] = red(brightness);
    pixels[i + 1] = green(brightness);
    pixels[i + 2] = blue(brightness);
    pixels[i + 3] = alpha(brightness);
    tx = (i % height === 0) ? (tx + 1) : tx;
    ty = (i % height === 0) ? 0 : (ty + 1);
  }*/
  for (let x = 0; x < 2*d*width; x++) {
    ty = 0;
    for (let y = 0; y < 2*d*height; y++) {
      i = x*width + y;
      brightness = color(floor(map(noise(tx, ty),0,1,0,255)));
      pixels[i] = red(brightness);
      pixels[i + 1] = green(brightness);
      pixels[i + 2] = blue(brightness);
      pixels[i + 3] = alpha(brightness);

      ty += 0.01;
    }
    tx+= 0.01;
  }
  updatePixels();
}

function draw() {
}