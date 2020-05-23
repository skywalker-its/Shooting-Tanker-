// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

var engine, world;
var tanker,ball1,ball2;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(300,390,10000,40);
    tanker = new Tanker(100,340,120,30);
    ball1 = new Ball(400,-30,25);
    ball2 = new Ball(150,320,10);                                                                                                 
}

function draw() {
// Remember to update the Matter Engine and set the background.
   background(255);
   Engine.update(engine);
   ground.display();
   tanker.display();
   ball1.display();
   ball2.display();
   if (keyIsDown("space")){
    console.log("space");
   }
  // world.gravity = 10;
}

  function keyPressed(){
      if(keyCode == 32){
        Matter.Body.setVelocity(ball2.body,{x: 10, y: -10});
       
        
      }
  }

 




function keyReleased() {
    // Call the shoot method for the cannon.
}