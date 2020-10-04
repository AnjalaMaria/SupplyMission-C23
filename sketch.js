var helicopterIMG, helicopterSprite, packageSprite,packageIMG,boxpart1s,boxpart2s,boxpart3s;
var packageBody,ground,boxpart1b,boxpart2b,boxpart3b;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxpart1s = createSprite(width/2, height-50, 200, 20);
	boxpart1s.shapeColor="red";

	boxpart2s = createSprite(290, height-90, 20, 100);
	boxpart2s.shapeColor="red";

	boxpart3s = createSprite(510, height-90, 20, 100);
	boxpart3s.shapeColor="red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	boxpart1b = Bodies.rectangle( width/2 , 690 , 200 , 20 , {isStatic:true} );
	World.add(world, boxpart1b);

	boxpart2b = Bodies.rectangle( 280 , 690 , 20 , 100 , {isStatic:true} );
	World.add(world, boxpart2b);

	boxpart3b = Bodies.rectangle( 520 , 690 , 20 , 100 , {isStatic:true} );
	World.add(world, boxpart3b);

      
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.setStatic(packageBody,false);
  }
}



