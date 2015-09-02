class Mediator{
    constructor(){
        this.handlers = {}
    }

    listen(event_name, func){
        if(!this.handlers[event_name]){
            this.handlers[event_name] = [];
        }
        this.handlers[event_name].push(func);
    }

    notify(event_name, payload){
        this.handlers[event_name].forEach(function(func){
            func(payload);
        });
    }

    getHandlers(event_name){
        return this.handlers[event_name];
    }
}



export default Mediator