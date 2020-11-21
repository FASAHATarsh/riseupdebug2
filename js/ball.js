//for protector ball which is protecting the ballon

class Ball
{
    constructor(x, y,radius) 
    {
        var options = 
        {
            'isStatic': false,
            'restitution':0.1,
            'friction':0.1,
            'density':4,
            
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.image= loadImage("images/ball.png");
    
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
          
          image(this.image,0, 0,this.radius,this.radius);
          pop();
       
      }
}