
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var ground, block1, block2, block3, block4, block5, block6, block7, block8, block9, polygon, slingshot;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(390, 300, 160, 20);

	block1 = new Block(330, 235, 30, 40);
	block2 = new Block(360, 235, 30, 40);
	block3 = new Block(390, 235, 30, 40);
	block4 = new Block(420, 235, 30, 40);
	block5 = new Block(450, 235, 30, 40);

	block6 = new Block(360, 190, 30, 40);
	block7 = new Block(390, 190, 30, 40);
	block8 = new Block(420, 190, 30, 40);

	block9 = new Block(390, 155, 30, 40);

	polygon = new Polygon(50, 200, 20);

	slingshot = new SlingShot(polygon.body, {x: 150, y: 200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  text("Score :" + score, 750, 40);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x: 150, y: 200});
		slingshot.attach(polygon.body);
	}
  }