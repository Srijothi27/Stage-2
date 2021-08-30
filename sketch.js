const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var playerArcher1;
var computer, computerBase, computerArcher1;
var arrow, shoot;


//run it sri
//ok mam


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Player Archer Object
  playerArcher1 = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher1 = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  arrow = new PlayerArrow(playerArcher1.body.position.x, playerArcher1.body.position.y, 100, 10);
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher1.display();
  computerArcher1.display();
 


  //Display arrow();
  arrow.display();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  // shoot(archerAngle)
  // {
  //   var velocity = p5.Vector.fromAngle(archerAngle);
  //   velocity.mult(20);
  //   Matter.Body.setStatic(this.body, false);
  //   Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  // }
 

 
    //Call shoot() function and pass angle of playerArcher
    if(keyCode===32){
      arrow.shoot(playerArcher1.body.angle);
    }


  }




