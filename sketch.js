
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
//var urvivalTime
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 380)
  
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1; 

  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  console.log(ground.x)
  
  score=0
  urvivalTime = 0
}


function draw() {
background(255);
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  urvivalTime = urvivalTime + Math.round(frameCount/frameRate());
  text("urvivalTime: "+ urvivalTime, 500,50);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
   if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
  food()
  Obstacle()
  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
  banana = createSprite(600,100,40,10);
  banana.y = Math.round(random(120, 200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
    
  banana.lifetime = 240;
    
 //bananaGroup.add(banana)
  }
}

function Obstacle() {
  if (frameCount % 300 === 0) {
  obstacle = createSprite(600,80,40,10);
  obstacle.y = Math.round(random(320, 330));
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
    
  obstacle.lifetime = 240;
    
 //obstacleGroup.add(obstacle)
  }
}

