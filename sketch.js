var allMyBubbles = [];
var numOfBubbles = 600;
var sizeOfBubble = 40;
var kiaraRed  = 50;
var kiaraBlue = 255;
var kiaraGreen = 50;




function setup(){
    createCanvas(700,500);
    kiaraRed = random(0,255);
kiaraGreen = random(0,255);
kiaraBlue = random(0,255);
    for(var i = 0; i < numOfBubbles; i++){
      allMyBubbles[i] = new Bubble(random(0,700),random(0,500));
}
    kiaraRed = random(0,255);
kiaraGreen = random(0,255);
kiaraBlue = random(0,255);
}

function draw(){
    background(255);
    kiaraRed = random(0,255);
kiaraGreen = random(0,255);
kiaraBlue = random(0,255);
    for(var i =0; i < allMyBubbles.length; i++){
      allMyBubbles[i].display();
      allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(kiaraBlue,kiaraGreen,kiaraRed,100);
    this.display = function(){
        stroke(0);
        ellipse(this.x,this.y,sizeOfBubble,sizeOfBubble);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }
}





