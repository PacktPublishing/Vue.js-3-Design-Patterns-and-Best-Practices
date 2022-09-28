<script setup>
import MainHeader from "./components/headers/MainHeader.vue"
import TodoProject from './components/TodoProject.vue';
</script>

<template>
    <div class="app">
        <MainHeader></MainHeader>
        <main class="w3-container">
            <TodoProject></TodoProject>
        </main>
    </div>
</template>

<style scoped>
.app {
    width: 100vw;
    min-height: 100vh;
    padding: 0;
}
</style>
