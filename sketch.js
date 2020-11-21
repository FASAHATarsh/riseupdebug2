/*
<================================================================================>
<===================  all copyrights preserved IronArshXS Fasahat   =============>
<================================================================================>
*/



// constant decleration 

const Engine=Matter.Engine;

const World=Matter.World;

const Bodies=Matter.Bodies;

const Render=Matter.Render;

var balloon,ball,bg,bg_img;
var c=300;
var lay=[];
// gameStates

var gameState = "l1";
var flag=0;
var mode = "start";

// common variable declartion


    // pyramid structure obs
    var lay1,lay2,lay3,lay4,lay5;

    var slabs=[],balls=[];
     
    var randBall=[];





// function preload to load images

function preload()
{

   bg_img =  loadImage("images/bg.png");

}


// function setup 

function setup()
 {

    createCanvas(600,700);

    engine=Engine.create();

    world=engine.world;
     
    var render=Render.create({
        element: document.body,
        engine: engine,
        options: {
            width:1600,
            height: 700,
            wireframes: false
        }
    });
    Render.run(render);



    balloon =new Balloon(300, 600);

    ball = new Ball(300,450,40);
    
    bg = createSprite(300,300,600,700);
    bg.scale=1.5;
    bg.y =bg.height;
    
    bg.addImage("background",bg_img);

 // obs1();

   //obs2();

  
}



// function to loof]p the background image 


function bgLoop()
{ 

    bg.velocityY=2;

    if(bg.y>600)
    {

        bg.y =400;
        
    }

}


function gameOver()
{
   World.remove(world,balloon.body);
 
   World.remove(world,ball.body);


    textSize(30);
    stroke(3);
    fill('green');
    text("CRASH",500,200);

  
}


/* this series of function will be used to create 
different predefined obstacle series for 
different levels 
*/

function obs1()
{
    for(var i=0;i<5;i++)
    {
        lay[i] = new Quad(300,c-300,c-50,20);
        c-=50;  
    }
}

function obs2()
{

    //this is for slabs and top balls
   
   for (var i =0; i<10; i++)
    {
        slabs[i] = new Quad(300,-50+(i*20),500,10)
      //   console.log("in slabs");
         balls[i] = new Circle(230+(i+2*30),-150,15)
        // console.log("in balls");
             
    }

}
//display function for all obstacles
function dispobs1()
{
    //console.log(lay[0].body);
    for(var w=0;w<lay.length;w++)
    {
        lay[w].display();
        var collision = Matter.SAT.collides(balloon.body,lay[w].body);
        if(collision.collided)
        {
        flag=1;

        }
    }
    
}
function dispobs2()
{
    for (var x =0; x<slabs.length; x++)
    {
        slabs[x].display(); 
        balls[x].display(); 

        var collision = Matter.SAT.collides(balloon.body,slabs[x].body);
        var collision2 = Matter.SAT.collides(balloon.body,balls[x].body);
        if(collision.collided||collision2.collided)
        {
        flag=1;
        }
  
    }
}



function obs3()
{
    for(var i=0;i<100;i++)
    {
        x= Math.round(random(50,550));
        y= Math.round(random(50,250));
        randBall[i] = new Circle(x,-y,10);
        
    }
}

function dispobs3()
{
    for (var x =0; x<randBall.length; x++)
    {
        randBall[x].display(); 
       
        var collision = Matter.SAT.collides(balloon.body,randBall[x].body);
       
        if(collision.collided)
        {
        flag=1;
        }
  
    }
}




// draw function to draw the objects on screen

function draw() 
{



    background(0); 

    Engine.update(engine); 

    bgLoop();

    drawSprites();

    ball.display();

    balloon.display();
    
        dispobs1();
      

        dispobs2();
        dispobs3();
    if( frameCount===100)
    {
        obs1();  
      //  console.log("in 1")
        
    }  
    if(frameCount===300)
    {
        obs2();
        //console.log("in 2")
       
       
    }
        if(frameCount===500)
    {
        obs3();
        //console.log("in 2")
       
    }
    if (flag===1)
    {
        gameOver();

    }

        //dispobs2();
        
}




