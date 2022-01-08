var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
box.shapeColor = "white"
}

function draw() 
{
  background("lightblue")
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +3;
  }
    if (keyIsDown(LEFT_ARROW)){
      box.position.x = box.position.x-3;
  }
  if (keyIsDown(UP_ARROW)){
    box.position.y = box.position.y-3;
  }
  if (keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y +3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    background("lavender");
  }
  if (keyIsDown(LEFT_ARROW)){
    background ("lightpink");
  }
 if (keyIsDown(UP_ARROW)){
  background("lightyellow");
  }
  if (keyIsDown(DOWN_ARROW)){
    background("lightgreen");
  }




  drawSprites();
} 





