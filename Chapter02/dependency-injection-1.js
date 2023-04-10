// Without dependency injection 

import dbManager from "dbManager"  

const projects={ 
    getAllProjects(){ 
        return dbManager.getAll("projects") 
    } 
}  

export default projects; 