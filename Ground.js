class Ground{
    constructor(x,y,length,breadth){
             
      this.body = Bodies.rectangle(x,y,length,breadth,{ isStatic: true });
      this.length = length;
      this.breadth = breadth;
      World.add(world,this.body);
  } 
     
      display(){
          var pos = this.body.position;
          var angle = this.body.angle;
           push();
          //translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill(0);
          rect(this.body.position.x,this.body.position.y,this.length,this.breadth);
          pop();
        }
    };