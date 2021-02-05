
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;

var mango1,mango2,mango3,mango4,mango5,mango6;

var world,boy;

var stone;

var launchingForce = 100;

var string;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1150,100,30);
	mango2=new mango(1010,50,30);
	mango3=new mango(1020,65,30);
	mango4=new mango(990,150,30);
	mango5=new mango(980,95,30);
	mango6=new mango(1100,195,30);
	mango7=new mango(1110,140,30);
	mango8=new mango(1100,65,30);
	mango9=new mango(1160,220,30);
	mango10=new mango(1115,250,30);


	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	stone1 = new Stone (200,340,20,30);

	string = new Elastic(stone1.body,{x:235 , y:430});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  textSize(25);
  text("press space to get a second chance to play !!",50,50)
  
  treeObj.display();
  
  mango1.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone1.display();

  string.display();

  groundObject.display();
}

function mouseDragged (){

  	Matter.Body.setPosition(stone1.body,{x:mouseX , y:mouseY});

}

function mouseReleased (){
	
	stone.fly();

}

function keyPressed(){

if (keyCode === 32){
	Matter.Body.setPosition(stone1.body,{x : 200 , y: 340});
	stone.attach(stone1.body)
}

}
