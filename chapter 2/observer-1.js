/**
    A naive implementation of a simple event dispatcher
    to implement an observer pattern
 */

class ObserverPattern{
    constructor(){
        this.events={}
    }
    on(event_name, fn=()=>{}){
        if(!this.events[event_name]){
            this.events[event_name]=[]
        }
        this.events[event_name].push(fn)
    }
    emit(event_name, data){
        if(!this.events[event_name]){
            return 
        }
        for(let i=0, l=this.events[event_name].length; i<l; i++){
            this.events[event_name][i](data)
        }
    }
    off(event_name, fn){
        let i=this.events[event_name].indexOf(fn);
        if(i>-1){
            this.events[event_name].slice(i, 1);
        }
    }
}

export default ObserverPattern;