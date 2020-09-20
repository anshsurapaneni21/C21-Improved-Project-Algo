
var fixedrect, movingrect;

var object1, object2;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(100,200,30,50);
  movingrect = createSprite(200,200,50,30);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  object1 = createSprite(100,280,30,50);
  object2 = createSprite(300,280,70,50);
  object1.shapeColor = "orange";
  object1.velocityX = 3;
  object2.shapeColor = "orange";
  object2.velocityX = -4;


 
}

function draw() {
  background(0);  
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  //object2.x = mouseX;
  //object2.y = mouseY;

  if(isTouching(object1,movingrect)){
    object1.shapeColor = "red";
    movingrect.shapeColor = "red";

  }
  else {
    
    object1.shapeColor = "orange";
    movingrect.shapeColor = "green";
  }

  bounceOff(object1,object2);


  
  drawSprites();
}

