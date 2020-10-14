const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drops = [];
var ran;
var maxdrops = 200;
var man 

function setup() {
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  umbrella = new Umbrella (200, 450);
  mans = createSprite(200, 500, 150, 150);
  if(frameCount%150 == 0){
    for(var i = 0;i<maxdrops;i++){
      drops.push(new Drops(random(0,400),random(0, 400)));
    }

  }   
    
}
 
function draw() {
  background("black");
  
  Engine.update(engine);
  ground.display();
  umbrella.display();
  for(var i = 0;i<maxdrops;i++){
    drops[i].display();
    drops[i].update();

  }
  rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

  
 
}


