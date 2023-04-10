<script setup>
import Child from "./Child.vue"
    
</script>

<template>
    <div class=" padding parent">

        <strong>Parent container</strong>
        <p>Messages are sent and received by any component or object, independent of their place in the component tree.</p>

        <div class="flex-container">
        <Child v-for="i in 4" :key="i" :title="'Child '+i"></Child>
        </div>
    </div>
</template>

<style scoped>
.parent{
    background-color: var(--shadow);
}
</style>