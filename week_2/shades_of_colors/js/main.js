let cols = 10, rows = 10, cH = 0, cS = 0, cL = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  
  stroke(255);
  strokeWeight(0);

  frameRate(2);
  //noLoop();
}

function draw() {
  const rH = height / rows;
  const rW = width / cols;
  let x = y = 0, h = Math.floor(Math.random()*361), col = color(255);

  for(let r = 0; r < rows; r++) {
    x = 0;
    for(let c = 0; c < cols; c++) {
      /* Algorithm 1 */
      colorMode(RGB);
      col = color(
        Math.floor(r*256/rows),
        Math.floor(c*256/cols),
      0
      );

      /* Algorithm 2 */
      colorMode(HSL);
      col = color(h, Math.floor(c*100/cols), 50-Math.floor(r*50/rows));
      console.log(col);

      /* Algorithm 3 */
      /* colorMode(HSL);
      col = color(Math.floor(c*361/cols), Math.floor(r*100/rows), 50);
      console.log(col); */

      /* Algorithm 4 */
      /* colorMode(HSL, cols, rows, 100);
      col = color(c, r, 50);
      console.log(col); */

      fill(col);
      rect(x, y, rW, rH);

      x += rW;
    }
    y += rH;
  }
}