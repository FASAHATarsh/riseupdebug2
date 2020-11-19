//for all the round shaped 

class Circle
{
    constructor(x, y,radius) 
    {
        var options = 
        {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
    this.body = Bodies.circle(x, y, radius, options);
    //this.image= loadImage("images/circle.png");

    this.radius = radius;
    World.add(world, this.body);
      } 
      display()
      {
        
          
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          ellipseMode(RADIUS);
          
          ellipse(0, 0,this.radius*1.5,this.radius*1.5);
          pop();
       
      }
}