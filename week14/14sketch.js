var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var characterx = 100;
var charactery = 300;
var characterdiameter = 25; 

var circley = 200;
var circley1 = 0;
var circlex = 0;
var circlexmovement= 10;
var circlemovement = 5;
var circlemovement1 = 5;


var meteorx = 0;
var meteory = 80;
var meteorxmovement= 80;
var meteorymovement= 30;
    
var mousex = 0;
var mousey = 0;

var wincon1 = true||false
var wincon2 = true||false



function setup()
{
createCanvas(1900,400);
 meteorx = random(0,1900)
 circley1 = random(0,1900)
 circlex = random(0,1900)
 console.log(meteorx)
}


function draw()
 {
Background();
Character();
createObstacles(); 
createObstacles1();
WASDKeys();
mouseCircle();
MetorShower();
WinCondition();
text1();
WIN();

function Background(){   
//background and border
background(255);
rect(1890,0,10,400)
rect(0,0,10,400)
rect (0,390,1820,10);
rect(0,0,1920,10);
fill(0,255,0);
}

//Meteor Shower
function MetorShower(){
    fill(255,0,0)
    circle(meteorx, meteory, 60);
    meteorxmovement = (floor(random()*20)+1);
    meteorymovement = (floor(random()*10)+1) ;
    meteorx += meteorxmovement;
    meteory += meteorymovement;
    if(meteorx > 1900)
    {meteorx = 0;}
    if(meteorx < 0)
    {meteorx = 0;}
    if(meteory > 400)
    {meteory = 0; }
    if(meteory < 0)
    {meteory = 400;}
    if (meteorx > 1900 && meteory <= 0  )
    {meteorx = random(0,1900) && meteory == 0;}
}

function WIN(){
    if (wincon1 == true && wincon2 == true)
    {text("You win! Press f5 to play again ", 800,200)}
}   
function WinCondition (){
//Win Conditions
if(characterx >= 1820  && characterx <= 1900) wincon1 = true  
else {wincon1 = false};
if (charactery >= 380 && charactery <=600) wincon2 = true
else {wincon2 = false};
if(wincon1 == false || wincon2 == false)
{console.log ("Make it to the Exit!!");}
else 
{ if (wincon1 = true && wincon2 == true)
    {console.log ("Nice! You Won!")} }
}
function Character(){
//Character
fill(23,40,123);
circle(characterx,charactery,25);
circle(characterx,charactery,characterdiameter);
}
//exit sign
function text1(){ 
text("Exit", 1750,370)
textSize(36)
}
function WASDKeys(){
//WASD Keys
if(keyIsDown(w))
{
charactery -= 10;
}
if(keyIsDown(s))
{
charactery += 10;
}
if(keyIsDown(a))
{
characterx -= 10;
}
if(keyIsDown(d))
{
characterx += 10;}
}
function createObstacles()
{  //obstacles 
   fill(200,250,0)
     circle(300,circley,10) ;
     circle(700,circley,30) ;
     circle(1100,circley,60); 
     
     circley += circlemovement;
     
     if (circley <= 400 )
     {circley ++;}
 
     if (circley >= 400)
     {circlemovement *= -1} ;
 
     if (circley <= 10) 
     {circlemovement *= -1};
 
     if (circley <= 10 )
         {circlemovement *-1} ;
   }
function createObstacles1()
   {    fill(255,0,155)
    circle(circlex,circley1,15) ; 
    circle(circlex,circley1,40) ;
    circle(circlex,circley1,70);
  circlemovement1 = (floor(random()*10)+1)
    circley1 += circlemovement1
    circlex += circlexmovement
    if (circley1 > 400 )
    {circley1 = 0 } ;
    if (circley1 < 0)
    {circley1 = 0 } ;
    if (circlex > 1900 )
    {circlex = random(0,1900) && circley1 == 0;}
 }
//Mouse Functions and dimentions
function mouseCircle(){
    circle(mousex, mousey, 30);
}
}
function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY; 
}