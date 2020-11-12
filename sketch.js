var pacman,pacmanimg,movementUp,movementDown,movementRight,movementLeftMonster1,Monster2,Monster3,Monster4;

function preload(){

pacmanimg=loadImage("pacman_stand.gif")
movementUp=loadImage("pacman_up.gif")
movementDown=loadImage("pacman_down.gif")
movementRight=loadImage("pacman_right.gif")
movementLeft=loadImage("pacman_left.gif")
Monster1=loadImage("monster1.gif")
Monster2=loadImage("monster2.gif")
Monster3=loadImage("monster3.gif")
Monster4=loadImage("monster4.gif")
wall=loadImage("wall.gif")
}


function setup() {
  createCanvas(800,400);
  pacman=createSprite(400, 200, 50, 50)
  monster1=createSprite(200,400,50,50)
  monster2=createSprite(100,200,50,50)
  monster3=createSprite(300,260,50,50)
  monster4=createSprite(160,100,50,50)
  wall1=createSprite(200,220,50.50)
  wall2=createSprite(200,250,50.50)
  wall3=createSprite(200,280,50.50)
  wall4=createSprite(200,310,50.50)
  wall5=createSprite(230,310,50.50)
  wall6=createSprite(260,310,50.50)
  wall7=createSprite(260,280,50.50)
  wall8=createSprite(260,250,50.50)
  wall9=createSprite(260,220,50.50)
  wall10=createSprite(260,190,50.50)
  wall11=createSprite(200,160,50.50)
  wall12=createSprite(200,190,50.50)
  wall13=createSprite(260,250,50.50)
  wall14=createSprite(290,190,50.50)
  wall15=createSprite(200,130,50.50)
  wall16=createSprite(230,130,50.50)
  wall17=createSprite(260,130,50.50)
  wall1.addImage(wall);
  wall2.addImage(wall);
  wall3.addImage(wall);
  wall4.addImage(wall);
  wall5.addImage(wall);
  wall6.addImage(wall);
  wall7.addImage(wall);
  wall8.addImage(wall);
  wall9.addImage(wall);
  wall10.addImage(wall);
  wall11.addImage(wall);
  wall12.addImage(wall);
  wall13.addImage(wall);
  wall14.addImage(wall);
  wall15.addImage(wall);
  wall16.addImage(wall);
  wall17.addImage(wall);
  
  
  pacman.addImage(pacmanimg);
  monster1.addImage(Monster1);
  monster2.addImage(Monster2);
  monster3.addImage(Monster3);
  monster4.addImage(Monster4);
}
var gameState = 0;
function draw() {
  background(0);  
  edges = createEdgeSprites();
  pacman.bounceOff(edges);
  pacman.bounceOff(wall1);
  pacman.bounceOff(wall2);
  pacman.bounceOff(wall3);
  pacman.bounceOff(wall4);
  pacman.bounceOff(wall5);
  pacman.bounceOff(wall6);
  pacman.bounceOff(wall7);
  pacman.bounceOff(wall8);
  pacman.bounceOff(wall9);
  pacman.bounceOff(wall10);
  pacman.bounceOff(wall11);
  pacman.bounceOff(wall12);
  pacman.bounceOff(wall13);
  pacman.bounceOff(wall14);
  pacman.bounceOff(wall15);
  pacman.bounceOff(wall16);
  pacman.bounceOff(wall17);
  monster1.bounceOff(edges);
  monster2.bounceOff(edges);
  monster3.bounceOff(edges);
  monster4.bounceOff(edges);
  if (monster2.isTouching(wall1)) {
    monster2.velocityX = -4
  }
  if (monster2.isTouching(wall2)) {
    monster2.velocityX = -4
  }
  if (monster2.isTouching(wall3)) {
    monster2.velocityX = -4
  }
  if (monster2.isTouching(wall4)) {
    monster2.velocityX = -4
  }
  drawSprites();
  if (keyDown("up")){
    pacman.y=pacman.y-5;
    pacman.addImage(movementUp)
  }
  if (keyDown("down")){
    pacman.y=pacman.y+5;
   pacman.addImage(movementDown)
 }
 if (keyDown("left")){
   pacman.x=pacman.x-5;
   pacman.addImage(movementLeft)
 }
 if (keyDown("Right")){
  pacman.x=pacman.x+5;
   pacman.addImage(movementRight)
 }
 if (keyDown("space")){
   gameState = 1;
 }
 if (gameState === 1) {
   monster1.velocityX = 4;
   monster1.velocityY = -4;
   monster2.velocityX = 4;
   monster2.velocityY = 4;
   monster3.velocityX = 4;
   monster3.velocityY = -4;
   monster4.velocityX = 4;
   monster4.velocityY = 4;
 }
}
