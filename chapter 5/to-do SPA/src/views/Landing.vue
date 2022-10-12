<script setup>
import eventBus from "../services/eventBus"

function newProject(){
    eventBus.emit("#NewProject")
}
</script>

<template>
    <div class="landing-wrapper">
        <h1 class="w3-bottombar">
            <i class="fa-solid fa-list-check w3-text-purple"></i>
            Landing page
        </h1>
        <p>
            You can create a new project from the sidebar or select one already created.
        </p>
        <p>
            This route was defined as static in our router. 
        </p>
        <button @click="newProject()">
            New project
        </button>
    </div>
</template>

<style scoped>
.landing-wrapper{
    padding: 10rem;
    margin: 0 auto;
    min-width: 40rem;
    max-width: 60rem;
}
</style>