
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1= new Bob(200,600,20,20);
	bobObj2= new Bob(300,600,20,20);
	bobObj3= new Bob(400,600,20,20);
	bobObj4= new Bob(500,600,20,20);
	bobObj5= new Bob(600,600,20,20);
	bobObj6= new Bob(700,600,20,20);

	roof= new Roof(100,200,20,20)

	rope1=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)
	rope3=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)
	rope4=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)
	rope5=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)
	rope6=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
 
}



