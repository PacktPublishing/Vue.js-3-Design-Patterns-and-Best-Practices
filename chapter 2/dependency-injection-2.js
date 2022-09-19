// With dependency injection 

const projects={ 
    getAllProjects(dbManager){ 
        return dbManager.getAll("projects") 
    } 
}  

export default projects; 