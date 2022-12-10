<script setup>
import { useSessionStorage } from "../../services/SessionStorage"

const $sessionStorage = useSessionStorage()
</script>

<template>
    <div class="padding with-background">
        <strong>Child Component</strong>
        <div>Counter: {{ $sessionStorage.counter }}</div>
    </div>

</template>

<style scoped>

</style>