class ControllerEngine{
    #keys = {
        A:{'pressed':false},
        D:{'pressed':false},
        W:{'pressed':false},
        S:{'pressed':false},
    }
    constructor(){
        document.addEventListener('keydown', (event) => this.setKey(event.key,true))
        document.addEventListener('keyup', (event) => this.setKey(event.key,false))
    }
    get GetKey(){
        return this.#keys
    }
    setKey(key,pressed){
        if(this.#keys[key.toUpperCase()] != undefined || this.#keys[key.toUpperCase()] != null)
        this.#keys[key.toUpperCase()].pressed = pressed      
    }
}