class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/unnamed.png");
    this.image10 = loadImage("sprites/smoke.png");
    this.trajectory = [];
    }

  display() {
    push();
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 260){
      var pos = [this.body.position.x, this.body.position.y];
     this.trajectory.push(pos);
    }
    for(var i = 0 ; i < this.trajectory.length ; i++ ){
      image(this.image10, this.trajectory[i][0], this.trajectory[i][1]);
    }
    pop();
  }
}
