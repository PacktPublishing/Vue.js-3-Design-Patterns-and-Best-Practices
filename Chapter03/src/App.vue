<script setup>
import ToDos from "@components/ToDos.vue"
</script>

<template>
    <div class="app w3-blue-gray">
        <ToDos />
    </div>
</template>

<style scoped>
.app {
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    padding: 5rem;
}
</style>
