class Player{
    #position = {x:256, y:500}
    #width = 16
    #height = 16
    #velocity = {x:0, y:0}

    constructor(){

    }

    START(eventStart){
    }

    UPDATE(eventUpdate){ 
        this.#velocity.x += this.#velocity.x
        this.#position.x += this.#velocity.x
        if(eventUpdate.keys){     
            this.Move(eventUpdate.keys);
        }
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
            eventDraw.context.fillStyle = "white";
            eventDraw.context.fillRect(this.#position.x, this.#position.y, this.#width, this.#height);
        }
    }

    STOP(eventStop){

    }
}