//character x,y,diameter
var characterx = 900;
var charactery = 500;
var diameter = 20; 
var characterspeed = 5;


//WASD Movement Codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// 
let angleRotate1 = 0.0;
//let angleRotate2 = 0.0;
let angleRotate3 = 0.0;

//knob x
var knobxx =150;
var knobxy =930;
var knobxd = 250;


//knob y
var knobyx =1760;
var knobyy =930;
var knobyd = 250;


//Etch - Sketch
let img;
function preload() {
    img = loadImage('https://sat02pap001files.storage.live.com/y4m-7pTdEsLyJX0xVnSjFBGtJ1JMFyu0uC5A48pxRoGaC2AY0CRRp1qvQ9YpRWTWCAlOJsdlsOEo8ij9gzwUwcacP2F3amTBqp5GfFXQEg4Kih4p0puP1Vt7glTUWNOSVHTOVHNIO1hESIMoZBUqOEFqOYY5Whnv2-pJuTo7aFQ-i1xVxZ9DSUiEXwpWNVEjc4A?width=1920&height=1080&cropmode=none');
}



  

//setup function
function setup()
{
    image(img,0,0);
    loadImage('https://sat02pap001files.storage.live.com/y4m-7pTdEsLyJX0xVnSjFBGtJ1JMFyu0uC5A48pxRoGaC2AY0CRRp1qvQ9YpRWTWCAlOJsdlsOEo8ij9gzwUwcacP2F3amTBqp5GfFXQEg4Kih4p0puP1Vt7glTUWNOSVHTOVHNIO1hESIMoZBUqOEFqOYY5Whnv2-pJuTo7aFQ-i1xVxZ9DSUiEXwpWNVEjc4A?width=1920&height=1080&cropmode=none', img => {
        image(img, 0, 0);
      });
    createCanvas(1920,1080);
    

}

//draw function
function draw()
{
    character();
    WASDKeys();
    text1();
    text2();
    preload();
    knobx();
    knoby();
    rotate1();
    rotate2();
    Rotate3();
    Rotate4();
}


//character function
    function character()
{
    fill(0)
    circle(characterx,charactery,diameter)

if 
(characterx < 291 || characterx > 1620) 
{
 (characterx = 900 )
}

if 
(charactery < 194 || charactery > 834) 
{
 (charactery = 500 )
}


}



//WASD function
function WASDKeys(){
    if(keyIsDown(w))
    {
    charactery -= 7;
    }
    if(keyIsDown(s))
    {
    charactery += 7;
    }
    if(keyIsDown(a))
    {
    characterx -= 7;
    }
    if(keyIsDown(d))
    {
    characterx += 7;}
    }

// rotate X + Y
function rotate1(){
    textSize(125)
    if (keyIsDown(a)){
        push(2);
        translate(150,930);
        rotate(radians(angleRotate1));
        
        text( "X", 0,0);
        pop(2);
        angleRotate1 += -1;
        
        }
    }
  


function rotate2(){
    if (keyIsDown(d)){    
        push(2);
        translate(150,930);
        rotate(radians(angleRotate1));
        text( "X", 0,0);
        pop(2);
        angleRotate1 += 1;
        
   }
}

function Rotate3(){   
     
     if (keyIsDown(s)){
    push(1);
    translate(1765,930);
    rotate(radians(angleRotate3));
    text( "Y", 0,0);
    pop(1);
    angleRotate3 += 1;
   
     }
}

function Rotate4(){   
     
    if (keyIsDown(w)){
   push(1);
   translate(1765,930);
   rotate(radians(angleRotate3));
   text( "Y", 0,0);
   pop(1);
   angleRotate3 += -1;

    }
}
// Knob circle + rotation

function knobx()
{
    stroke(1)
    fill(255,255,255)
    circle(knobxx,knobxy,knobxd)
    fill(0); textSize(50)
    text("A or D", 80,800);

}


function knoby()
{
    stroke(1)
    fill(255,255,255)
    circle(knobyx,knobyy,knobyd)
    fill(0);
    text("W or S", 1695,800);
}





//title screen
function text1()
{
    fill(0);
    textSize(72);
text("WELCOME to Dean's: Etch-A-Sketch",365,925,);



}
//instructions
function text2()
{
    textSize(50);
    text("Feel Free to draw whatever!", 650,1000);
}
