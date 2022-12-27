<script setup>
import NetworkCommunicationVue from './components/NetworkCommunication.vue';
import DBtestVue from './components/DbNotes.vue';
import webWorker from "./services/WebWorker.js"

import { ref } from "vue"

const _message=ref("")

function testWebWorker(){
    _message.value="Waiting reply..."
    webWorker.request("test").then(data=>{
        _message.value=data;
    }, ()=>{
        _message.value="Connection to Web Worker failed."
    })
}

</script>

<template>
<div class="padded">
    <h1>Chapter 8 - Multithreading with Web Workers</h1>
    <hr>

    <h2>Simple Web Worker test</h2>
    <p>Send the request to the Web Worker, and it will answer in 3 seconds.</p>
    <div class="flex-container padded">
        <button @click="testWebWorker()">
            Send request
        </button>
        <div class="padded">
            {{ _message }}
        </div>
    </div>

    <h2>Network connections through the worker</h2>
    <NetworkCommunicationVue></NetworkCommunicationVue>

    <h2>IndexedDB access through the worker</h2>
    <DBtestVue></DBtestVue>
</div>

</template>

<style scoped>

</style>
