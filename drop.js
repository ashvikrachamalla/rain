class Drops{
    constructor(x,y){
       var options = {
        restitution: 0.4,
        friction: 0,
        isStatic:false
       }
       this.r = 10;
       
       this.body = Bodies.circle(x,y,10,options);
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill('aqua');
        ellipseMode(RADIUS);
        ellipse(0,0,3,5);
        pop();
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
}