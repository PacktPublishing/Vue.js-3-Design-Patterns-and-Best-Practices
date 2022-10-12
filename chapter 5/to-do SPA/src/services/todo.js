const service = {
    getDefault() {
        return {
            id: Date.now().toString(16) +"_"+ Math.ceil(Math.random()*1000).toString(16),
            text: "",
            status: "not_started"
        }
    },
    getStatusList() {
        return [
            { id: "not_started", label: "Not started" },
            { id: "in_progress", label: "In progress" },
            { id: "completed", label: "Completed" }
        ]
    },
    validateTodo(item){
        return item.text.length>0;
    },
    makeCopy(item){
        return JSON.parse(JSON.stringify(item))
    },
    toggleStatus(status){
        switch(status){
            case "not_started":
                return "in_progress"
            case "in_progress":
                return "completed"
            case "completed":
                return "not_started"
        }
    },
    createTodoProject(name=""){
        let projects = service.loadProjectsManifest()

        // Prepare the new project
        let project_id=projects.next_id

        // Update the projects manifest
        projects.next_id++;
        projects.list.push({id:project_id, name});

        // Create project entry in local storage
        localStorage.setItem(`project.${project_id}`, "[]")

        // Save the projects manifest
        service.saveProjectsManifest(projects)

    },
    loadProjectsManifest(){
        // Check if the master project list exists in localStorage
        let projects=localStorage.getItem("projects");

        // If it doesn't exist, we create a default.otherwise, parse the string
        if(!projects){
            projects={next_id:0, list:[]}
        }else{
            projects=JSON.parse(projects)
        }
        return projects;
    },
    saveProjectsManifest(project={}){
        localStorage.setItem("projects", JSON.stringify(project))
    }
}

export default service;