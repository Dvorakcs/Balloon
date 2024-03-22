class GameEngine{
    #context = new CanvasEngine().context
    #controllerEngine = new ControllerEngine()
    #player = new Player();
    #genericsBlockEngine = [new GenericsBlockEngine()]
    constructor(){

    }

    START(eventStart){

        this.UPDATE({})
    }

    UPDATE(eventUpdate){
        
        
        this.#genericsBlockEngine.forEach(block => {
            block.UPDATE({})
        });
        this.#player.UPDATE({
            keys:this.#controllerEngine.GetKey,
            Blocks:this.#genericsBlockEngine
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
            this.#genericsBlockEngine.forEach(block => {
                block.DRAW(eventDraw)
            });
            this.#player.DRAW(eventDraw)
        }
    }

    STOP(eventStop){

    }
}