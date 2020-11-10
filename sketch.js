
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,570,1600,20);
	paper=new Paper(200,400,20);
	dustbin=new Dustbin(1200,550,150,20);
	dustbin1=new Dustbin(1120,475,20,175)
	dustbin2=new Dustbin(1270,475,20,175);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
 // drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-95});
	}
}

