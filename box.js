class Box{
    constructor(x, y, width, height){
        var options={
        isStatic:false,
        density:0.04,
        friction:1,
        restitution:0.8
        }
    this.body=Bodies.rectangle(x, y, width, height, options)
    World.add(world, this.body);
    this.width = width;
    this.height = height;
    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }
    }