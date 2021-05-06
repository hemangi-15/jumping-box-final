var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,580,180,20);
surface1.shapeColor='purple';
surface2=createSprite(300,580,180,20);
surface2.shapeColor='red';
surface3=createSprite(500,580,180,20);
surface3.shapeColor='yellow';
surface4=createSprite(700,580,180,20);
surface4.shapeColor='blue';




    //create box sprite and give velocity
box=createSprite(random(20,780),100,40,40);
box.shapeColor='white';
box.velocityX=6;
box.velocityY=6;
}

function draw() {
    background('grey');
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.shapeColor='purple';
        box.bounceOff(surface1);
        music.playSound();
    }
    if(box.isTouching(surface2)){
        box.shapeColor='red';
        box.bounceOff(surface2);
        music.playSound();
    }
    if(box.isTouching(surface3)){
        box.shapeColor='yellow';
        box.bounceOff(surface3);
        box.velocityX=0;
        box.velocityY=0;
        music.playSound();
    }
    if(box.isTouching(surface4)){
        box.shapeColor='blue';
        box.bounceOff(surface4);
        music.playSound();
    }
    drawSprites();
}
