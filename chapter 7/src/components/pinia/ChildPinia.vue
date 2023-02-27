<script setup>
import { useCounterStore } from '../../stores/counter';
const
    $store=useCounterStore()
</script>

<template>
<div class="padding with-background">
    <h4>Child component</h4>
    <code :class="{'red': !$store.inRange}">{{$store}}</code>
    <hr>
    <button @click="$store.increment()">Increment</button>
    <button @click="$store.decrement()" :disabled="!$store.inRange">Decrement</button>
</div>
</template>

<style scoped>
.red{
    color: red;
}
</style>