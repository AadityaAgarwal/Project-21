var bullet,wall;
var speed,weight,damage,thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness= random(22,83);
  speed= random(223,321);
  weight= random(30,52);

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX= speed

  wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor= color(80,80,80);

}

function draw() {
  background(0);  
  
  if(hasCollided(wall,bullet)){
    
    damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor= "green";
    }
    else if(damage>10){
      wall.shapeColor= "red";
    }
    bullet.velocityX=0;
  }
 
  
  drawSprites();
}

function hasCollided(lbullet,lwall){

  if (lwall.x-lbullet.x < (lwall.width+ lbullet.width)/2 && lbullet.x- lwall.x < (lbullet.width+ lwall.width)/2){
    return true;    
  }
  else{
    return false;
  }
}