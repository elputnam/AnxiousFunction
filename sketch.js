let capture;
let base;
let base1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(10);
  base = height;
  base1 = 0;
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  background(360, random(100), random(100), 5);
  imageMode(CENTER);
  filter(INVERT);
  tint(175, random(100), random(100));
  image(capture, random(width), random(height), random(width), random(height/2));
  // image(capture, width/2, height/2, random(width), random(height/2));
  // filter(OPAQUE);
  stroke(random(255));
  strokeWeight(10);
  line(0, base, width, base);
  line(0, base1, width, base1);
  let num = 10
  base -= random(-num, num);
  base1 += random(-num, num);
  if (base <= 0){
    base = height;
  }
  if (base1 >= height){
    base1 = 0;
  }
}
