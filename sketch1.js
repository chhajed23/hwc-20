var movingRect,fixedRect




function setup() {
  createCanvas(800,400);
  
 fixedRect=createSprite(400, 200, 50, 80);
 movingRect=createSprite(400,400,80,50);

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

  fixedRect.velocityY=+5;
  movingRect.velocityY=-5;

}

function draw() {
  background(0);  

 
 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2  
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX=movingRect.velocityX*(-1);
  }
  
  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    fixedRect.velocityY=fixedRect.velocityY*(-1);
    movingRect.velocityY=movingRect.velocityY*(-1);

  
 }
  drawSprites();
}