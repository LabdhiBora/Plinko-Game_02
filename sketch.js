const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division,division2,division3,division4,division5;
var spwanParticles;
var particles =[];
var plinkos=[];
var score=0;
var particle;
 var turn=0;
 var line;
 var gameState=end;
function setup() {
  createCanvas(480,600);
  
  
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(80,height,800,20);

  division=new Division(160,490,10,200);
  division2=new Division(260,490,10,200);
  division3=new Division(60,490,10,200);
  division4=new Division(360,490,10,200);
  division5=new Division(460,490,10,200);
 
  line=createSprite(90,350,800,05);
  line.shapeColor="yellow";
  for(var j =40;j<=width; j=j+50){
     plinkos.push(new Plinko(j,75,10))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  
  for(var j =40;j<=width; j=j+50){
    plinkos.push(new Plinko(j,275,10))
 }
 
}

function draw() {
  background(0);  
  fill("white");
  textSize(35);
  text("Score:",40,30);
  textSize(25);
  text("100",85,405);
  text("100",200,405);
  text("500",300,405);
  text("500",400,405);

  Engine.update(engine);
  drawSprites();
  ground.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display()
  }
  if (frameCount%10===0){
   var x=random(50,width-50)
    particles.push(new Particles(x,-25,10))
  }
  for (var j=0;j<particles.length;j++){
    particles[j].display()
  }
}
function mousePressed(){
if  (gameState ="end"){
  score++;
  particle=new Particles(mouseX,10,10,10);
}

}
