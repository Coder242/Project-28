
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var crp, ground, container;
var Slingshot;

function setup() {
	createCanvas(600, 500);

	engine = Engine.create();
	world = engine.world;

	crp = new Paper(125,400,45,45)
	ground = new Floor(10)
	container = new Dustbin(480,400,140,170)

	Slingshot = new SlingShot(crp.body,{x:125, y:380});
	
}


function draw() {
  background(220);

  Engine.update(engine);

  crp.display();
  ground.display();
  container.display();

  Slingshot.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(crp.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    Slingshot.fly();
    
}

