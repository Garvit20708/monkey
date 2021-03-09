
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
monkey=createSprite(80,315,20,20);  
  monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
  ground=createSprite(0,400,1500,20)
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
  foodGroup=createGroup()
  obstacleGroup=createGroup()
  
}


function draw() {
createCanvas(670,400)
background("skyblue");
  
  survivalTime=0
  score=0
 
if(ground.x<0){
  ground.x=ground.width/2;
}    
  if(keyDown("space")&&monkey.y>350){
    monkey .velocityY=-16  
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground)
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach()
    score=score+1
    
  }
  fill("white")
  text("Score:  "+ score , 500,50   )
  
  stroke("black")
  textSize(16)
  fill("black")
   var survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50)
  
  drawSprites();
  hardRock();
  tastyBanana();
  
}
function hardRock(){
  if(frameCount%200===0){
obstacle=createSprite(670,352,40,30)
obstacle.velocityX=-6
obstacle.addImage(obstaceImage)
  obstacle.scale=0.2
    
  }






}

function tastyBanana() {
  if(frameCount %250===0 ){
  banana=createSprite(670,200,10,10)
 
  banana.addImage(bananaImage);
    banana.scale=0.1
banana.velocityX=-4
    

   
    foodGroup.add(banana)
    
  }
}








