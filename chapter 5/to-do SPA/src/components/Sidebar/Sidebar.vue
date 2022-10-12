<script setup>
import {ref, inject, onMounted, onBeforeUnmount} from "vue"
import eventBus from "../../services/eventBus"
import todoService from "../../services/todo"

const
    $modals=inject("$modals"),
    _project_name=ref(""),
    _projects=ref([])

onMounted(()=>{
    // Register events
    eventBus.on("#NewProject", openNewProject)
    updateProjects()
})

onBeforeUnmount(()=>{
    // De-register events (Clean after yourself!)
    eventBus.off("#NewProject", openNewProject)
})

function openNewProject(){
    _project_name.value=""
    $modals
        .show("#NewProject")
        .then(()=>{
            if(_project_name.value!=""){
                todoService.createTodoProject(_project_name.value)
                updateProjects()
            }
        }, ()=>{})
}

function updateProjects(){
    let projects=todoService.loadProjectsManifest();
    _projects.value=projects.list;
}
    
</script>

<template>
    <section class="w3-blue w3-padding w3-container">
        <h4>To-Do Projects</h4>

        <RouterLink :to="{name:'landing'}" active-class="w3-purple">
            Home
        </RouterLink>

        <!-- Projecs -->
        <div v-for="p in _projects" :key="p.id">
            <RouterLink 
                :to="{name:'project', params:{id:p.id}}"             
                active-class="w3-purple"
                >
                {{p.name}}
            </RouterLink>        
        </div>
        
        <!-- Modals -->
        <Modal name="#NewProject" title="New To-Do Project">
            <strong>Name</strong>
            <input 
                type="text" 
                class="w3-input w3-border" 
                placeholder="Enter project name..."
                v-model="_project_name">
        </Modal>
    </section>
</template>

<style scoped> 
a{
    text-decoration: none;
    display: block;
    padding: 4px;
}   
</style>