class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,70,60);
    this.image = loadImage("sprites/wood1.png");
    this.visibility=255;
  }
    display(){
    
    //console.log(this.body.speed);
    if(this.body.speed<8){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);    
      pop();  
    }
    
    }
    score(){
      if(this.visibility < 0 && this.visibility > -1005){
        score = score + 5;
      }
    }
};