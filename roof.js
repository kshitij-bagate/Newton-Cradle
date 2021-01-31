class Roof {
    constructor(x, y,height, width){
        this.body =Bodies.rectangle(x, y, height,width, {isStatic:true});
        World.add(world,this.body);
        this.height = height;
        this.width = width;
    }
    display(){
        rectMode(CENTER);
        push();
        fill("brown");
        rect(this.body.position.x, this.body.position.y,this.height ,this.width  );
        pop();
    }
}