var canvas;
var gameState
var king
var spaceship
//BP
var gravity = 0.7
var backgroundImg
var ninja
var bg
var shipAnimation, spacePlayer, spaceAnimation
var bullet
var fire
function preload() {
 backgroundImg = loadImage("./assets/background.jpg")
 spacePlayer = loadImage("./assets/spaceship1.png")
shipAnimation = loadAnimation("./assets/ship1.png","./assets/ship2.png", "./assets/ship3.png")

 spaceAnimation = loadAnimation("./assets/spaceship1.png","./assets/spaceship2.png", "./assets/spaceship3.png")
 fire= loadImage("./assets/fireImage.png")
}

//BP
function setup() {
  canvas = createCanvas(2000,1000);

  bg = createSprite(1000,500)
 bg.addImage("background", backgroundImg)
 bg.scale = 1.6
 bg.x = bg.width/2
 bg.velocityX  = -0.5
 
  spaceship = createSprite(600,300,100,100)

  spaceship.addImage("goodBoy", spacePlayer)
 spaceship.scale = 2.5
 
 
 
 //bullet = createSprite(spaceship.position.x,spaceship.position.y,20,20)
 //bullet.visible = false
 


 

  
  
 


 
 
}

//BP
function draw() {
  background("white");

  if(keyWentDown("d")){
    spaceship.velocity.x = 2
    
    spaceship.addAnimation("goodBoy", spaceAnimation)

  }
  if(keyWentUp("d")){
    spaceship.velocity.x = 1
    spaceship.addAnimation("goodBoy", spaceAnimation)
    
    
    
  }
  if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyDown("space")){
    bullet = createSprite(spaceship.position.x,spaceship.position.y,20,20)
    bullet.addImage("bullet1", fire)
    bullet.scale = 0.3

    bullet.visible = true
    bullet.velocity.x = 5
  }
  //spaceship.velocity.x = 1


  drawSprites()
  
}






