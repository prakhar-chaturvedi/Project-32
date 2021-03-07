const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1;
var backgroundImg,platform;
var bird, slingShot;

var gameState = "onsling"
var score = 0;

function preload() {
    changeBg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 300, 170);
    pig1 = new Pig(810, 550);
    pig2 = new Pig(780, 550);
    pig4 = new Pig(750, 550)
    pig3 = new Pig(800, 500);
    pig7 = new Pig(830, 500);
    pig8 = new Pig(790, 450);
     
    pig6 = new Pig(770, 500);
    pig5 = new Pig(840, 550);
    bird = new Bird(100,230);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:245});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    textSize(30);
    stroke("white");
    text( " SCORE " + score, 1000, 200 );
    strokeWeight(4);
    ground.display();
    pig1.display();
       
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    
    pig1.score();
    pig2.score();
    pig3.score();
    pig4.score();
    pig5.score();
    pig6.score();
    pig7.score();
    pig8.score();

    bird.display();
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "released"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY}); 
    }
     
}


function mouseReleased(){
    slingshot.fly();
    gameState = "released";
    

    }
    function keyPressed(){
        if(keyCode===32){
           slingshot.attach(bird.body);
           Matter.Body.setPosition(bird.body,{x : 100 , y : 230});
           gameState = "onsling";
           bird.trajectory = [];
        }
        }

   async function changeBg(){
        var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var rJSON = await respond.json();
        var dateTime = rJSON.datetime;
        //console.log(dateTime);
        var hour = dateTime.slice(11,13);
        if(hour > 6  &&  hour < 17){
            bg = "sprites/bg.png";
        }
        else{
            bg = "sprites/bg2.jpg";
        } 
        backgroundImg = loadImage(bg);
     }
    