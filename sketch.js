var bullet,wall;
var speed,weight;
var thickness;
var lbullet;
var lwall;


function setup() {
  createCanvas(1600,400);
  

  speed = random(223,321)
  weight = random(30,52)

  bullet = createSprite(50,200,10,5)
  bullet.shapeColor = color("white")
  
  bullet.velocityX = speed;

  thickness= random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color("yellow")
}

function draw() {
  background(0);  
  bullet.display();
  wall.display();
  
 if(hasCollided(bullet,wall))
 {
   bullet.velocityX = 0;
   var  damage = 0.5 * weight*speed*speed / (thickness*thickness*thickness);
  if(damage < 10)
  {
      wall.shapeColor = color(0,230,0);
    }
     
   if (damage > 10 )
    {
      wall.shapeColor = color("red");
    }   
 }
console.log(damage)
  drawSprites();
  
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width 
    wallLeftEdge = lwall.x 
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
   
     return false
   
    }


