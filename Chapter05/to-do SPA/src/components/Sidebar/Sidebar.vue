<script setup>
import {ref, inject, onMounted, onBeforeUnmount} from "vue"
import eventBus from "../../services/eventBus"
import todoService from "../../services/todo"

const    
    _projects=ref([])

updateProjects()

onMounted(()=>{
    // Register events
    eventBus.on("#UpdateProjects", updateProjects)
})

onBeforeUnmount(()=>{
    // De-register events (Clean after yourself!)
    eventBus.off("#UpdateProjects", updateProjects)
})

function updateProjects(){
    let projects=todoService.loadProjectsManifest();
    _projects.value=projects.list;
}
    
</script>

<template>
    <section class="w3-blue ">
        <h4 class="w3-row-padding">To-Do Projects</h4>

        <RouterLink :to="{name:'landing'}" class="w3-padding" active-class="w3-yellow">
            Home
        </RouterLink>

        <!-- Projecs -->
        <div v-for="p in _projects" :key="p.id">
            <RouterLink 
                :to="{name:'project', params:{id:p.id}}"             
                active-class="w3-yellow"
                 class="w3-padding"
                >
                {{p.name}}
            </RouterLink>        
        </div>        
        
    </section>
</template>

<style scoped> 
a{
    text-decoration: none;
    display: block;
    padding: 4px;
}   
</style>