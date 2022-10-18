<script setup>
import { inject, ref } from "vue"
import eventBus from "../services/eventBus"
import todoService from "../services/todo";

const
    $modals = inject("$modals"),
    _project_name = ref("")

function newProject() {
    _project_name.value = ""
    $modals
        .show("#NewProject")
        .then(() => {
            if (_project_name.value != "") {
                todoService.createTodoProject(_project_name.value)
                eventBus.emit("#UpdateProjects")
            }
        }, () => { })
}
</script>

<template>
    <div class="landing-wrapper">
        <h1 class="w3-bottombar">
            <i class="fa-solid fa-list-check w3-text-purple"></i>
            Landing page
        </h1>
        <p>
            You can create a new project or select one from the sidebar.
        </p>
        <p>
            This route was defined as static in our router.
        </p>
        <button @click="newProject()">
            New project
        </button>

        <!-- Modals -->
        <Modal name="#NewProject" title="New To-Do Project">
            <strong>Name</strong>
            <input type="text" class="w3-input w3-border" placeholder="Enter project name..." v-model="_project_name">
        </Modal>
    </div>
</template>

<style scoped>
.landing-wrapper {
    padding: 10rem;
    margin: 0 auto;
    min-width: 40rem;
    max-width: 60rem;
}
</style>