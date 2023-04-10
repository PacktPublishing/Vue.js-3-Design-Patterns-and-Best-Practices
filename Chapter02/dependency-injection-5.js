/**
    An example of a class that requires the dependency
    in the constructor
 */

class Projects {
    constructor(dbManager=null){
        if(!dbManager){
            throw "Dependency missing" 
        }else{
            this.dbManager=dbManager;
        }
    }
}

// Then the instantiation would be as follows

try{
    const projects=new Projects(dbManager)
}catch{
    // Error handler here
}