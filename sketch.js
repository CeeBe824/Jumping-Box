var canvas;
var music;
var ball,roof,leftWall,rightWall,floor,floor1,floor2,floor3,floor4;

box.velocityX = 5;
box.velocityY = 5;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    ball = createSprite(random(20,750,));
    ball.velocityX = 5;
    ball.velocityY = 5;
    ball.shapeColor = "white";
    ball.width = 30;
    ball.height = 30;
    ball.y = 200;

    rightWall = createSprite(800,250,1,500);

    floor = createSprite(400,500,800,1);

    leftWall = createSprite(0,250,1,500);

    roof = createSprite(400,0,800,1);

    floor1 = createSprite(100,450,200,26);
    floor1.shapeColor = "blue";

    floor2 = createSprite(300,450,200,25);
    floor2.shapeColor = "orange";
    
    
    
    floor3 = createSprite(500,450,200,25);
    floor3.shapeColor = "purple";

    floor4 = createSprite(700,450,200,25);
    floor4.shapeColor = "green";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite

ball.bounceOff(floor);
ball.bounceOff(rightWall);
ball.bounceOff(leftWall);
ball.bounceOff(roof);



if(floor1.isTouching(ball) && ball.bounceOff(floor1)){
    ball.shapeColor = "blue";
}
if(floor2.isTouching(ball) && ball.bounceOff(floor2)){
    ball.shapeColor = "orange";
    ball.velocityX = 0;
    ball.velocityY = 0;
   

}
if(floor3.isTouching(ball) && ball.bounceOff(floor3)){
    ball.shapeColor = "purple";
}
if(floor4.isTouching(ball) && ball.bounceOff(floor4)){
    ball.shapeColor = "green";
}







drawSprites();
    //add condition to check if box touching surface and make it box
}
