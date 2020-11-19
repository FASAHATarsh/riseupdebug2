//for obstacle
class Obstacle{
    constructor(x, y,width,height) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':1.5,
            'density':0.2,
            
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
      // this.image= loadImage("images/.png");
      Matter.Body.setMass(this.body,this.body.mass*50);
       this.width = width;
       
       this.height = height;
        World.add(world, this.body);
      } 
      display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        
        rect(0, 0,this.width,this.height);
        pop();
       
      }


}