let capture;
let base;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  // frameRate(5);
  base = height;
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  background(150, random(100), random(100), 5);
  imageMode(CENTER);
  filter(INVERT);
  tint(360, random(100), random(100));
  image(capture, random(width), random(height), random(width), random(height/2));
  // filter(OPAQUE);
  stroke(random(255));
  strokeWeight(10);
  line(0, base, width, base);
  base -= 1;
  if (base == 0){
    base = height;
  }
}
