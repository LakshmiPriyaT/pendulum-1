const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var chain1;

function setup() {
 var canvas =  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  board = new Box(400,150,150,15);
  bob   = new Circle(450,300,15);
 

  chain1 = new SlingShot(board.body,bob.body);


}

function draw() {
  background(100);  
  
  Engine.update(engine);

  board.display();
  bob.display();
  chain1.display();

}

function keyPressed(){
  console.log("gdjhdgjh");
  if (keyCode === 32){
   // bob.body.position.x = mouseX;
   // bob.body.position.y = mouseY;
   console.log("gdjhdgjh");
   Matter.Body.setPosition(bob.body,{x:mouseX , y:mouseY});

  }}

  function keyPressed(){
    if(keyCode === 8){
      bob.body.position.x = 400;
      bob.body.position.y = 300;
    }
  }
