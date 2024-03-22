class Player{
    #position = {x:300, y:300}
    #width = 16
    #height = 16
    #velocity = {x:0, y:0}
    constructor(){

    }

    START(eventStart){

    }

    UPDATE(eventUpdate){ 
        if(this.VerifyCollisionWall()){
           this.ApplyVelocity();
        }
        if(eventUpdate.Blocks){
          if(this.VerifyCollisionBlock(eventUpdate.Blocks)){
                
          }
        }
        if(eventUpdate.keys){     
            this.Move(eventUpdate.keys);
        }
    }
    VerifyCollisionWall(){
        return !(this.#position.x + this.#velocity.x <= 0 || 
            this.#position.x + this.#width+this.#velocity.x > 321) == true
    }
    VerifyCollisionBlock(blocks){
        for(let i = 0; i < blocks.length; i++){
            if(this.#position.x + this.#velocity.x <= blocks[i].position.x + blocks[i].width &&
                this.#position.x + this.#width + this.#velocity.x >= blocks[i].position.x &&
                this.#position.y + this.#velocity.y <= blocks[i].position.y + blocks[i].height &&
                this.#position.y + this.#height + this.#velocity.y >= blocks[i].position.y){
                   return true
            }
            
        }
    }
    ApplyVelocity(){
        this.#velocity.x += this.#velocity.x
        this.#position.x += this.#velocity.x
    }
    Move(keys){
       if(keys.A.pressed){
        this.#velocity.x = -1.5;
       }
       if(keys.D.pressed){
        this.#velocity.x = 1.5;
       }

       if(!keys.D.pressed && !keys.A.pressed){
        this.#velocity.x = 0
       }
    }
    DRAW(eventDraw){
        if(eventDraw.context){
            eventDraw.context.fillStyle = 'white'
            eventDraw.context.fillRect(this.#position.x, this.#position.y, this.#width, this.#height);
       
        }
    }
    
    STOP(eventStop){

    }
}