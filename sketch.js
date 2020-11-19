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


// common variable declartion


    // pyramid structure obs
    var lay1,lay2,lay3,lay4,lay5;

    var slabs=[],balls=[];
    
var flag=0;




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

/* this series of function will be used to create 
different predefined obstacle series for 
different levels 
*/

function obs1()
{
    for(var i=0;i<5;i++)
    {
        lay[i] = new Quad(300,c,c-50,20);
        c-=50;  
    }
}

function obs2()
{

    //this is for slabs and top balls
   
   for (var i =0; i<5; i++)
    {
        slabs[i] = new Quad(300,50+(i*20),300,10)
      //   console.log("in slabs");
         balls[i] = new Circle(100+(i*20),100,20)
        // console.log("in balls");
             
    }

}
// draw function to draw the objects on screen
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
        if(flag ===1){
        textSize(30);
        stroke(3);
        fill('green');
        text("CRASH",500,200);
//crashSound.play();
        }
    }
}
function dispobs2()
{
    for (var x =0; x<slabs.length; x++)
    {
        slabs[x].display(); 
        balls[x].display(); 
        
    }
}

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
        
        if(gameState==="l1" && frameCount===100)
    {
        obs1();  
        console.log("in 1")
        
        gameState="l2";
    }  
    if(gameState==="l2" && frameCount===300)
    {
        obs2();
        console.log("in 2")
    }
    
    
    //     //dispobs2();
        
}
