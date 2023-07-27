var asteroidImg, boomImg, asteroidGroup;
var earthImg, jetImg, lifeImg, bg;
var jet, asteroid, earth;
function preload(){
    asteroidImg = loadImage("images/asteroid-removebg-preview.png");
    boomImg = loadImage("images/boom-removebg-preview.png");
    earthImg = loadImage("images/earth-removebg-preview.png");
    jetImg = loadImage("images/jet.webp");
    lifeImg = loadImage("images/life-removebg-preview.png");
    bg = loadImage("images/bg.jpg");

}

function setup() {
  createCanvas(1400,1000);
  earth = createSprite(200, 325, 50, 50);
  earth.addImage(earthImg);
  earth.scale = 1.75;
  
  jet = createSprite(500, 350, 50, 50);
  jet.addImage(jetImg);
  jet.scale = 0.25;
  jet.rotation = 90
}

function draw() {
  background(255,255,255);
  image(bg, 0, 0, width, height)  
  drawSprites();
}