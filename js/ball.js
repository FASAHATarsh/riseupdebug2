//for protector ball which is protecting the ballon

class Ball
{
    constructor(x, y,radius) 
    {
        var options = 
        {
            isStatic: false,
           
           // friction:0,
            frictionAir: 0.0005,
            density:1,
            
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.image= loadImage("images/ball.png");
    this.visibility=255;
    Matter.Body.setMass(this.body,this.body.mass*50);

    this.radius = radius;
    World.add(world, this.body);
      } 
      display()
      {
          this.body.position.x=mouseX;
          this.body.position.y=mouseY;
          
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          if(gameState==="crash"){
          this.visibility=this.visibility-5;
          tint(255,this.visibility);}
          
          
          image(this.image,0, 0,this.radius,this.radius);
          pop();
       
      }
}