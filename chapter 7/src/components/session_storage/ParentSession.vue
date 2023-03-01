<script setup>
import ChildSessionVue from "./ChildSession.vue";
import { useSessionStorage } from "../../services/sessionStorage"

const $sessionStorage = useSessionStorage()

try {
    // Initialize if not found
    if(!$sessionStorage.counter){
        $sessionStorage.counter = 1
    }
} catch (err) {
    console.log(err)
}

</script>

<template>
    <div>
        <p>This composable keeps the <strong>sessionStorage</strong> in sync with a reactive variable</p>
        <div class="with-background padding flex-container">
            <div>
                <h4>Value in sessionStorage</h4>
                <input type="number" v-model="$sessionStorage.counter">
            </div>
            <div class="side-padding">
                <h4>Reactive value, in sync with session storage</h4>
                <h1>Counter: {{ $sessionStorage.counter }} </h1>
            </div>
            <div class="padding">
                <ChildSessionVue></ChildSessionVue>
                <ChildSessionVue></ChildSessionVue>
            </div>
        </div>
    </div>
</template>

<style scoped>
input {
    padding: 1rem;
}
</style>