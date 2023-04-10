<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';

const
    _install_ready=ref(false),
    _install_prompt=ref(null),
    _app_installed=ref(false)

// Detect PWA installable
onMounted(()=>{
    window.addEventListener("beforeinstallprompt", savePrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
})

onBeforeUnmount(()=>{
    window.removeEventListener("beforeinstallprompt", savePrompt);
    window.removeEventListener("appinstalled", handleAppInstalled);
})

function savePrompt(event){
    
    // Prevents mobile overlay prompt
    event.preventDefault();

    // Save reference to the event, to activate it later
    _install_prompt.value=event;

    // Notify UI that the application can be installed
    _install_ready.value=true;
}

function installPWA(){
    // Trigger the installation prompt
    if(_install_prompt.value){
        _install_prompt.value.prompt()
    }
}
function handleAppInstalled(){
    _install_prompt.value=null;
    _app_installed.value=true;
}
</script>

<template>
  <div>
    <h1>Basic Progressive Web Application</h1>
    <p>This example code contains the bare bones minimum requirements for a Progressive Web Application:</p>
    <ul>
        <li>Served over a SSL (HTTPS) connection</li>
        <li>Links to a manifest file</li>
        <li>Installs a Service Worker</li>
    </ul>

    <p v-show="_install_ready && !_app_installed">
        Install this app here <button @click="installPWA()">[ Install ] </button>
    </p>

    <p v-show="_app_installed">
        Progressive Web Application installed
    </p>
  </div>
</template>

<style scoped>
div{
    padding: 5rem;
}
</style>
