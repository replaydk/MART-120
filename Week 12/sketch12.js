var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var characterx = 100;
var charactery = 100;
var characterdiameter = 25; 

var circley = 200;
var circley1 = 200;
var circlemovement = 5;
var circlemovement1 = -5;

/* To be completed
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
*/
var mousex = 0;
var mousey = 0;

var wincon1 = true||false
var wincon2 = true||false



function setup()
{
createCanvas(1900,400);
 
}


function draw()
 {
//background and border
    background(255);
    rect(1890,0,10,400)
    rect(0,0,10,400)
    rect (0,390,1820,10);
    rect(0,0,1920,10);
    fill(0,255,0);
    
  
   
   //obstacles 
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

    
    
    fill(255,0,0)
    circle(500,circley1,15) ; 
    circle(900,circley1,40) ;
    circle(1300,circley1,70);
   circley1 += circlemovement1
    if (circley1 <= 400 )
    {circley1 ++;} ;

    if (circley1 >= 400)
    {circlemovement1 *= -1} ;

    if (circley1 <= 10) 
    {circlemovement1 *= -1};

    if (circley1 <= 10 )
        {circlemovement1 *-1} ;
  
/*
        circle(shapeX, shapeY, 10);

        // get a random speed when the it first starts
        shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   
       // move the shape
       shapeX += shapeXSpeed;
       shapeY += shapeYSpeed;
       // check to see if the shape has gone out of bounds
       if(shapeX > width)
       {
           shapeX = 0;
       }
       if(shapeX < 0)
       {
           shapeX = width;
       }
       if(shapeY > height)
       {
           shapeY = 0;
       }
       if(shapeY < 0)
       {
           shapeY = height;
       }
*/


//exit sign
  
text("Exit", 1750,370)
textSize(36)


//Character
fill(23,40,123);
circle(characterx,charactery,25);
circle(characterx,charactery,characterdiameter);

//Win Conditions
if(characterx >= 1820  && characterx <= 1900) wincon1 = true  
else {wincon1 = false};
if (charactery >= 380 && charactery <=450) wincon2 = true
else {wincon2 = false};

if (wincon1 == true && wincon2 == true)
{text("You win! Press f5 to play again ", 800,200)}

if(wincon1 == false || wincon2 == false)
{console.log ("Make it to the Exit!!");}
else 
{ if (wincon1 = true && wincon2 == true)
    {console.log ("Nice! You Won!")} }


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



//Mouse Functions and dimentions

circle(mousex, mousey, 30);
}

function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
    
}