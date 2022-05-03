var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var characterx = 100;
var charactery = 300;
var characterdiameter = 25; 

var circley = 200;
var circley1 = 10;
var circlex = 10;
var circlexmovement= 10;
var circlemovement = 5;
var circlemovement1 = 5;

var newshapex = 30 ;
var newshapey = 50 ;
var newshapexr = [] ;
var newshapeyr = [] ;
var newshapediameter = [] ;
var newshapexspeed = [] ;
var newshapeyspeed = [] ;

var meteorx = 0;
var meteory = 80;
var meteorxmovement= 10;
var meteorymovement= 10;
    
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
 console.log(newshapexr)
 for (var i = 0; i < 50; i++) {
    newshapexspeed[i] = (random1);
    newshapeyspeed[i] = (random1);
    newshapexr[i] = random1(100);
    newshapeyr[i] = random1(100);
    newshapediameter[i] = random1(25); }
  /*  newshapexr[0] = 25 ; newshapeyr[0] = 50 ; newshapediameter[0]=25; 
    newshapexr[1] = 30; newshapeyr[1] =75; newshapediameter[1]=30;
    newshapexr[2] = 40 ; newshapeyr[2]=100; newshapediameter[2]=40;
    newshapexr[3] = 80; newshapeyr[3]=125; newshapediameter[3]=50;
    newshapexr[4] = 120; newshapeyr[4]=150; newshapediameter[4]=60;
    newshapexr[5] = 200 ; newshapeyr[5]=175; newshapediameter[5]=70;
*/
    
 
}



function draw()
 {
for(var i = 0; i < newshapexr ; i++)
{circle(newshapexr[i], newshapeyr[i], newshapediameter[i])}
fill(255,255,0)
circle(  newshapexr[1] = 25 , newshapeyr[1] = 50 , newshapediameter[1]=25 )

    Background();
array()
//random1();
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
    
    meteorxmovement = (floor(random()*20)+1) ;
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
// new array
function array(){
    fill(255,255,0)
    for (var i = ([0],[1],[2],[3],[4],[5]); i <= 0; i++) {
        circle(newshapexr[0], newshapeyr[0], newshapediameter[0]);
        circle(newshapexr[1], newshapeyr[1], newshapediameter[1]);
        circle(newshapexr[2], newshapeyr[2], newshapediameter[2]);
        circle(newshapexr[3], newshapeyr[3], newshapediameter[3]);
        circle(newshapexr[4], newshapeyr[4], newshapediameter[4]);
        circle(newshapexr[5], newshapeyr[5], newshapediameter[5]);
        newshapexspeed[i] = (floor(random()*10)+1);
        newshapeyspeed[i] = (floor(random()*10)+1);
             // move the shape
             newshapexr[i] += newshapexspeed[i];
             newshapeyr[i] +=  newshapeyspeed[i];
             if (newshapexr[i] > 1900) {newshapexr[i] = 0;}
             if (newshapexr[i] < 0) {newshapexr[i] = 1900;}
             if (newshapeyr[i] > 400) {newshapeyr[i] = 0;}
             if (newshapeyr[i] < 0) {newshapeyr[i] = 400;}
          }
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


function random1(number) {
    return Math.floor(Math.random() * 1,1890) + 10;
}