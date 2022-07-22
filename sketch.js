
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground1;
var left,right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);



    var ballop ={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
	    density :1.2
	}

   var groundop ={
	    isStatic : true
   }
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(200,200,10,ballop)
	World.add(world,ball)

	ground1 = Bodies.rectangle(400,500,800,4,groundop)
    World.add(world,ground1)
	
	left = Bodies.rectangle(450,479,10,50,groundop);
    World.add(world,left)

	right = Bodies.rectangle(550,459,10,100,groundop)
	World.add(world,right)
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  drawSprites();
  ellipse(ball.position.x,ball.position.y,10)
  rect(ground1.position.x,ground1.position.y,800,4)
  rect(left.position.x,left.position.y,10,50)
  rect(right.position.x,right.position.y,10,100)
  KeyPressed();
}

function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.25,y:0.25})
	}

}

