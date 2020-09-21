class Polygon{
    constructor(x, y, radius){
        var options = {
            friction:0.3,
            density: 1,
            isStatic: false,
        }
        this.body = Bodies.rectangle(x, y, radius, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.radius, this.radius);
    }
}