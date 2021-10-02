var sea, seaImg;
var ship1, shipImg1;
var ship2, shipImg2;
var ship3, shipImg3;
var ship4, shipImg4;
var ship


function preload(){

  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200, 20, 20)
  sea.scale = 0.5
  ship = createSprite(200,200, 20, 20)
  ship.scale = 0.5
} 


function draw() {
  background("blue");
  sea.addImage(seaImg)
  ship.addAnimation("shipRunning", shipImg1)
 drawSprites();
   
}
