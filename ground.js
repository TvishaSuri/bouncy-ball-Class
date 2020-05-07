class Ground{
    constructor(x,y,width,height) {
        var option={isStatic:true}
        this.body=Bodies.rectangle (x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        angleMode(RADIANS)
        rectMode (CENTER)
        fill("white")
        rect(0,0,this.width,this.height)
        pop();
        


    }
}