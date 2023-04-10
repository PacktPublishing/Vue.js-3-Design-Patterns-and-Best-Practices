<script setup>
import useState from "../../services/SimpleState"

const $state=useState()


</script>

<template>
<div class="padding with-background">
    <div class="flex-container">
        <strong>State: </strong><br>
        <pre>{{$state}}</pre>
    </div>
    <div class="flex-container flex-wrap">
    <button @click="$state.counter++">Increment</button>
    <button @click="$state.counter--">Decrement</button>
    </div>
</div>
</template>

<style scoped>
    
</style> 