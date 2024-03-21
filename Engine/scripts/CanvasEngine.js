class CanvasEngine{
    #canvas = document.getElementById('CanvasGame');
    #context = this.#canvas.getContext('2d');
   constructor(){
    
   }
    get canvas(){
        return this.#canvas;
    }

    get context(){
        return this.#context;
    }
}