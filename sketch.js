const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;

function preload() {
    //    = loadImage("images/.png");
}

function setup() {
    canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
}

function draw() {
    background(0);
    Engine.update(engine);
}