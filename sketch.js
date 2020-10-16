const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder, thunder1,thunder2,thunder3,thunder4;
var drops = [];
var ran;
var maxdrops = 200;
var man 
var thunderCreatedFrame=0;
function preload(){
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");
     
  man = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png");
 
}
function setup() {
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  umbrella = new Umbrella (200, 450);
  mans = createSprite(200, 500, 150, 150);
  mans.addAnimation("walking",man);
    mans.scale =0.5;
  if(frameCount%150 == 0){ 
    for(var i = 0;i<maxdrops;i++){
      drops.push(new Drops(random(0,400),random(0, 400)));
    }

  }   
    
}
 
function draw() {
  background("grey");
  
  Engine.update(engine);
  ground.display();
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

  drawSprites();
}


