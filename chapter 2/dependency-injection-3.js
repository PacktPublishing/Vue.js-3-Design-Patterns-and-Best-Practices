// With dependency injection by property

const projects={
    dbManager,
    getAllProjects(){ 
        return this.dbManager.getAll("projects") 
    } 
}  

export default projects; 