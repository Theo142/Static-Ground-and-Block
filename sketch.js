const Engine=Matter.Engine

const World=Matter.World

const Bodies=Matter.Bodies

var Engine2
var World2
var object2
var Rectangle2

function setup() {
  createCanvas(800,400);
  
Engine2 = Engine.create()

World2 = Engine2.world

var Static2 = {isStatic:true}

Object2 = Bodies.rectangle(400,370,800,50,Static2)

World.add(World2,Object2)

var Rectangle3 = {restitution:0.8}
Rectangle2 = Bodies.rectangle(200,200,50,50,Rectangle3)

World.add(World2,Rectangle2)

}

function draw() {
  background("yellow");  

Engine.update(Engine2)

  rectMode(CENTER)
  rect(Object2.position.x,Object2.position.y,800,50)

  rect(Rectangle2.position.x,Rectangle2.position.y,50,50)

  drawSprites();
}