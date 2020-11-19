//for all the 4 sided obstacle
class Quad 
{
    constructor(x, y,width,height) 
    {
        var options = 
            {
              'isStatic': false,
              'restitution':0.5,
              'friction':1,
              'density':2,
              
        }
       this.body = Bodies.rectangle(x, y,width,height, options);
       // this.image= loadImage("images/.png");
        
       this.width = width;
        
       this.height = height;
       World.add(world, this.body);
    } 
      display()
      {
        
         var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         rectMode(CENTER);
         
         rect(0, 0,this.width,this.height);
         pop();
         
      }


}