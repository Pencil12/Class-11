
var trex ,trex_running;
var ground
var ground_image
var ground2

function preload(){
  ground_image=loadImage("ground2.png")
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,25)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(300,180,600,20)
  ground.addImage("ground",ground_image)
  ground.velocityX=-5
  ground.x=ground.width/2
  ground2=createSprite(50,190,20,10)
  ground2.visible = false
}

function draw(){
  background(200)
  drawSprites()

  if (keyDown ("space") && trex.y>150) {
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5
trex.collide(ground2)
if (ground.x<0) {
  ground.x=ground.width/2 
}
}
