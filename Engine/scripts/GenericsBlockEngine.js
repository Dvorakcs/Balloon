class GenericsBlockEngine{
    position = {x:0, y:10}
    width = 16
    height = 16
    velocity = {x:0, y:1}
    constructor(){

    }
    START(eventStart){
        
    }

    UPDATE(eventUpdate){ 
      
        this.position.y += this.velocity.y;
    }
    
    DRAW(eventDraw){
        if(eventDraw.context){
            eventDraw.context.strokeStyle = 'white'
            eventDraw.context.strokeRect(this.position.x, this.position.y, this.width, this.height);
       
        }
    }
    
    STOP(eventStop){

    }
    
}