class GameEngine{
    #context = new CanvasEngine().context
    #controllerEngine = new ControllerEngine()
    #player = new Player();
    constructor(){

    }

    START(eventStart){

        this.UPDATE({})
    }

    UPDATE(eventUpdate){
        
        

        this.#player.UPDATE({
            keys:this.#controllerEngine.GetKey
        })
        this.DRAW({
            context: this.#context,
        })
        requestAnimationFrame(this.UPDATE.bind(this));
    }

    DRAW(eventDraw){
        
        if(eventDraw.context){
            //eventDraw.context.scale(2,2);
            eventDraw.context.fillStyle = "#000";
            eventDraw.context.fillRect(0, 0, 512, 720);
            this.#player.DRAW(eventDraw)
        }
    }

    STOP(eventStop){

    }
}