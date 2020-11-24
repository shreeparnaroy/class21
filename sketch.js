



//variable section
var rect1,rect2
var o1,o2,o3,o4
//preload section

//setup section - create sprites add propertes
function setup() {
  createCanvas(1000,600);
  rect1 = createSprite(400, 400, 50, 50);
  rect1.shapeColor= "red"
  rect1.debug = true
  rect2 = createSprite(200,200,50,70)
  rect2.shapeColor = "red"
  rect2.debug = true
  o1 = createSprite(100, 200, 50, 50);
 // o2 = createSprite(200, 200, 50, 50);
 // o3 = createSprite(300, 200, 50, 50);
  o4 = createSprite(400, 200, 50, 50);
  o1.velocityX = 2
  o4.velocityX =-2
}

//controll the sprites
function draw() {
  background("pink");  

  rect2.x = mouseX
  rect2.y = mouseY

/*if(rect1.isTouching(rect2)){
    rect1.shapeColor= "green"
    rect2.shapeColor = "green"
  }
  else{
    rect1.shapeColor= "red"
    rect2.shapeColor = "red"
  }*/
//distance b/w the two sprites 
console.log(rect1.x - rect2.x)
console.log(rect1.width/2 + rect2.width/2)

if(touching(o4,rect2)){
  o4.shapeColor= "green"
  rect2.shapeColor = "green"
}
else{
  o4.shapeColor= "red"
  rect2.shapeColor = "red"
}

bounce (o1,o4)
  drawSprites();
}







