var frect,mrect;
var ob1,ob2,ob3;
function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,50,30);
  frect.shapeColor = "green";
  mrect = createSprite(400,300,40,20);
  mrect.shapeColor = "orange";
  ob1 = createSprite(50,200,50,50);
  ob1.shapeColor = "yellow";
  ob2 = createSprite(150,200,50,50);
  ob2.shapeColor = "yellow";
  ob3 = createSprite(250,200,50,50);
  ob3.shapeColor = "yellow";
}

function draw() {
  background("blue"); 
  console.log(frect.x-mrect.x);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

  if(isTouching(mrect,ob1)){
    ob1.shapeColor = "green";
    mrect.shapeColor = "red";
  }
  else{
    ob1.shapeColor = "yellow";
    mrect.shapeColor = "orange";
  }

  drawSprites();
}

function isTouching(object1,object2){
   if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
   return true;
  }
  else{
    return false;
  }
}