class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.1,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paperimg.png")
        World.add(world, this.body);
    }
    display(){
        push();
        fill("violet");
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}