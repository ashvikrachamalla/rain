class Umbrella{
    constructor(x,y){
       var options = {
           restitution:0.4,
           isStatic:true
       }
       
       this.body = Bodies.circle(x, y, 100,options);
     this.color = "white";
       this.r = 100;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r + 50);
        pop();
    }
}
