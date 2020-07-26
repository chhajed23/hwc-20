var car1,car2,car3,car4,wall;
var wall1,wall2,wall3,wall4;

var speed,weight;


function setup(){
createCanvas(700,700);

speed=random(25,95);
weight=random(400,1500);

car1=createSprite(100,100,20,20);
car2=createSprite(100,200,20,20);
car3=createSprite(100,350,20,20);
car4=createSprite(100,500,20,20);

car1.shapeColor="red";
car2.shapeColor="green";
car3.shapeColor="yellow";
car4.shapeColor="blue";

car1.velocityX=speed;
car2.velocityX=speed;
car3.velocityX=speed;
car4.velocityX=speed;

wall1=createSprite(600,100,10,50);
wall2=createSprite(600,200,10,50);
wall3=createSprite(600,350,10,50);
wall4=createSprite(600,500,10,50);

wall1.shapeColor="pink";
wall2.shapeColor="pink";
wall3.shapeColor="pink";
wall4.shapeColor="pink";
}


function draw(){
background(0);

if(wall1.x-car1.x<(car1.width +wall1.width)/2){
    car1.velocityX=0;
    var deformation= 0.5 * weight * speed* speed/22509;
    if(deformation>180){
        car1.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
        car1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
        car1.shapeColor=color(0,255,0);
    }
}

if(wall2.x-car2.x<(car2.width +wall2.width)/2){
    car2.velocityX=0;
    var deformation= 0.5 * weight * speed* speed/22509;
    if(deformation>180){
        car2.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
        car2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
        car2.shapeColor=color(0,255,0);
    }
}

if(wall3.x-car3.x<(car3.width +wall3.width)/2){
    car3.velocityX=0;
    var deformation= 0.5 * weight * speed* speed/22509;
    if(deformation>180){
        car3.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
        car3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
        car3.shapeColor=color(0,255,0);
    }
}


if(wall4.x-car4.x<(car4.width +wall4.width)/2){
    car4.velocityX=0;
    var deformation= 0.5 * weight * speed* speed/22509;
    if(deformation>180){
        car4.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
        car4.shapeColor=color(230,230,0);
    }
    if(deformation<100){
        car4.shapeColor=color(0,255,0);
    }
}






drawSprites();




}




