//for balloon the object to be protected

class Balloon{
    constructor(x, y) 
    {
         var options = 
         {
             'isStatic': true,
             'restitution':0.3,
             'friction':0.5,
             'density':1.2,
             
         }

       this.body = Bodies.rectangle(x, y,150,200, options);
       this.image= loadImage("images/balloon.png");
   
       this.width = 50;
       
       this.height = 50;
       World.add(world, this.body);
   
    } 
      display()
      {
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        
        image(this.image,0, 0,this.width*2,this.height*4);
        pop();
       
      }
}