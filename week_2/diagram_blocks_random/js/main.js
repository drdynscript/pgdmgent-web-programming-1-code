const randomCounts = new Array(20);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  randomCounts.fill(0);
}

function draw() {
  //const index = Math.round(random(0, randomCounts.length - 1));
  const index = Math.floor(Math.random()*(randomCounts.length));
  randomCounts[index]++;

  fill(255, 0, 0);
  const w = width/randomCounts.length;

  for(let x = 0; x < randomCounts.length; x++) {
    rect(x*w, height-randomCounts[x], w-1, randomCounts[x]);
  }

}