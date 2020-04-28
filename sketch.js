const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var rect,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9;
var ground;

function setup(){
  var canvas = createCanvas(1250,580);
  engine = Engine.create();
  world = engine.world;
  rect2= new Shape(625,350,300,400);
  rect0 = new Shape(380,350,180,430);
  rect1 = new Shape(870,350,180,430);
  rect3 = new Shape(310,125,40,40);
  rect4 = new Shape(380,125,40,40);
  rect5 = new Shape(450,125,40,40);
  rect6 = new Shape(800,125,40,40);
  rect7 = new Shape(870,125,40,40);
  rect8 = new Shape(940,125,40,40);
  line  = new Shape(625,130,4,90);
  rectFlag = new Shape(650,110,50,30);
  ground = new Ground(620,550,1250,10);
}

function draw(){
  background(230);
  Engine.update(engine);
  rect0.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  line.display();
  rectFlag.display();
  ground.display();
}

