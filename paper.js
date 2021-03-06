class Paper{

  constructor(x,y,radius){
      var options={
      isStatic:false,
      friction:0.5,
      restitution:0.3,
      density:1.2
    }

    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image=loadImage("paper.png");
    World.add(world,this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    fill(255);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y, this.radius+50,this.radius+50);
    pop();
  }
}