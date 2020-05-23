class Tanker {
  constructor(x, y,width,height) {
      var options = {
      //isStatic: true
  
     }
     this.body = Bodies.rectangle(x,y,width,height);
     this.width = width;
     this.height = height;
    //Matter.Body.setAngle(this.body,angle)

     World.add(world,this.body);
     
    };

    display(){
      // Draw the tanker the way you like.
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //rotate(angle);
      translate(0,0);    
      rectMode(CENTER);
      stroke("blue");
      strokeWeight(4);
      fill("Red");
      rect(150,320,150,30);
      pop();
      //rect(150,320,150,30);
      //rect(100,100,380,20);
     //rect(mouseX,mouseY,150,30);

      stroke("black");
      strokeWeight(4);
      fill("yellow");
      ellipse(100,340,110,110);

      stroke("black");
      strokeWeight(4);
      fill("blue");
      rect(100,370,120,55);
      rect(100,395,120,40);
     
      
      // You could also use an image if you want a specific look

    };
}
