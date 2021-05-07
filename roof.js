class Roof {
constructor(x,y,width,height)
{
var options = {
    isStatic : true,
    density: 1.0
}
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x, y, width, height, options);
World.add(world, this.body);
    
}

display(){
    
push();
fill("blue");
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop();

}


}