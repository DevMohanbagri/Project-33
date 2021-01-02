const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle ;
var turn = 0;
var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // particle = new Particle(mouseX,10,10,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("50",30,520);
  text("500",103,520);
  text("500",183,520);
  text("100",262.5,520);
  text("100",342.5,520);
  text("100",422.5,520);
  text("200",502.5,520);
  text("500",582.5,520);
  text("500",662.5,520);
  text("500",742.5,520);
  text("SCORE : "+score, 20,25);
  Engine.update(engine);

  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   if(particle!=null){
    particle.display();
    if(particle.body.position.y>500 && particle.body.position.x>10 && particle.body.position.x<80 ){
      score = score+50;
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>500 && particle.body.position.x>81 && particle.body.position.x<240 ){
      score = score+500;
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>500 && particle.body.position.x>241 && particle.body.position.x<480 ){
      score = score+100;
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>500 && particle.body.position.x>481 && particle.body.position.x<560 ){
      score = score+200;
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>500 && particle.body.position.x>561 && particle.body.position.x<800 ){
      score = score+500;
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   console.log(particle);
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);

  }
}