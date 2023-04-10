<script setup>
import ParentBasic from "./components/basic/ParentBasic.vue";
import MessageBus from "./components/bus/ParentBus.vue"
import SimpleState from "./components/simple/ParentSimple.vue"
import PiniaStore from "./components/pinia/ParentPinia.vue"
import SessionExperiment from "./components/session_storage/ParentSession.vue"
</script>

<template>
    <div class="app-wrapper">
        <h1>Data workflow examples</h1>
        <p>
            Each section shows the result for each approach in data communication.
        </p>
        <p>
            Click the counter to see the reactive value change in it's own bracket.
        </p>
        
        <section class="semi-padding">
            <h2>Basic communication</h2>
            <ParentBasic></ParentBasic>
        </section>
        <section class="semi-padding">
            <h2>Message bus</h2>
            <MessageBus></MessageBus>
        </section>
        <section class="semi-padding">
            <h2>Simple Reactive state</h2>
            <SimpleState></SimpleState>
        </section>
        <section class="semi-padding">
            <h2>Pinia store</h2>
            <PiniaStore></PiniaStore>
        </section>
        <section class="semi-padding">
            <h2>Session Storage reactive experiment</h2>
            <SessionExperiment></SessionExperiment>
        </section>

    </div>
</template>

<style scoped>

</style>
