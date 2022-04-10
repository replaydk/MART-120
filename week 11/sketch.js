 var color = (redColor,greenColor,blueColor);
 var redColor = 0;
 var greenColor =255;
 var blueColor = 200; 
 
 var doorx = 400; 
 var doory = 50;
 var doorw = 250;
 var doorh = 350;
 var doormovement = 5;

 var knobx = 600;
 var knoby =250; 
 var knobdiameter = 50;
 var knobmovement = 5;
 
var headx =200;
var heady =65;
var headdiameter = 100; 
var headmovement = 5;

var fridgex = 1700 ; 
var fridgey = 100 ;
var fridgew = 200 ;
var fridgeh = 300 ;
var fridgemovement = -5;

var circlex = 300 ;
var circley = 350 ;
var circlediameter = 50;
var circlemovement = 1; 
var textSize = 72;
var textx = 700;
var texty = 100;
// var movement= fridgemovement, headmovement, knobmovement,doormovement;


    
function setup() {
createCanvas(1900, 400); }



function draw() {
background(0,0,255);

 //floor
rect (0,350,1900,100); 

//Head
strokeWeight(5);
fill(0,255,200);
circle (headx,heady,headdiameter);
heady += headmovement; 

if(heady <= 400)
{heady ++ ; } 

if (heady >= 400)
{headmovement *= -1 ;}

if (heady <= 0 )
{heady = headmovement = (floor(random()*10)+1) ; } ;

if (heady <= 400)
{ heady --; } ; 

    
    
//left arm      
circle (100,150,50); 
circle (125,150,50);circle (150,150,50);
circle (175,150,50);

//right arm
circle (300,150,50); 
circle (275,150,50); circle (250,150,50); 
circle (225,150,50);
    
//right leg"
circle (300,350,50); 
circle (275,325,50); circle (250,300,50);
 circle (225,275,50); circle (200,250,50);
    
//"left leg"
circle (100,350,50); 
circle (125,325,50);circle (150,300,50); 
circle (175,275,50);

// diagnal circle 

circle (circlex,circley,circlediameter)

circlex += circlemovement;
circley += circlemovement;

if (circlex >= 1900 || (circley >= 400) )
{circlemovement = (floor(random()*10)*-1) ; 
}; 

if (circlex <= 0 || (circley <= 0 ))
{circlemovement =(floor(random()*10)*1)} ;





     
//center body
circle (200,250,50); 
circle (200,225,50); circle (200,200,50); 
circle (200,175,50);circle (200,150,50); 
circle (200,125,50);

//door
rect (doorx,doory,doorw,doorh);
doorx += doormovement ;
if (doorx <= 1125);
{doorx ++; }

if (doorx > 1125)
{doormovement *= -1;}

if (doorx <=395)
{doormovement = doormovement = (floor(random()*10)+1) ;}

if (doorx <= 1900)
{ doorx --; } ; 


console.log(fridgey);

 //knob      
circle (knobx,knoby,knobdiameter);
knobx += knobmovement; 

if(knobx <= 1200);
{knobx ++ ; }

if (knobx >= 1200)
{knobmovement *= -1 ;}

if (knobx <=600)
{knobmovement = knobmovement = (floor(random()*10)+1) };

if (knobx <= 1900)
{ knobx --; } ; 


 //pc
rect(1400,200,150,200) 
triangle (1400,0,1550,150,1400,150)
line(1500,150,1500,200)
line(1450,150,1450,200)
     
       
//Fridge
rect(fridgex,fridgey,fridgew,fridgeh)
fridgey += fridgemovement; 

if(fridgey <= 200)
{fridgey ++ ; } 

if (fridgey > 400)
{fridgemovement *= -1 ;}

if (fridgey <= 0 )
{fridgemovement = fridgemovement = (floor(random()*10)+1) ;} 

if (fridgey <= 0)
{ fridgemovement ++; } ; 



//signiture
fill(0)
textSize(72)
text("MSI", 1410,270);
textSize(24)

text("Dean Klakken III", 1710,390)

//title

textSize((floor(random(100,14))));


text("The Necessities",textx,texty,);
}
    