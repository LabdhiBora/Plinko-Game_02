class Particles {
    constructor(x,y,r){
        var options={
            restitution:0.4,
        }
    

     this.r=r;

      this.body=Bodies.circle (x,y,this.r,options);
      // this.color=color("green"),("red"),("yellow");
      World.add(world,this.body);

      
}
display(){

    var pos=this.body.position;
    var angle=this.body.angle;

    push ()
    
    // var particles=[j];
    // for (var j=0;j<Particles.length;j=j+1){
    //     particles[j].display();
    //   }
    var red=floor(random(0,200))
    var blue=floor(random(0,255))
    var green=floor(random(0,255))
    fill (red,blue,green);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    pop ();

}
}