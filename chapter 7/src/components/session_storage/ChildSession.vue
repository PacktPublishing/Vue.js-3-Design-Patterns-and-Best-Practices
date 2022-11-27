<script setup>
import { useSessionStorage } from "../../services/SessionStorage"

const state = useSessionStorage()
</script>

<template>
    <div class="padding with-background">
        <strong>Child Component</strong>
        <div>Counter: {{ state.counter }}</div>
    </div>

</template>

<style scoped>

</style>