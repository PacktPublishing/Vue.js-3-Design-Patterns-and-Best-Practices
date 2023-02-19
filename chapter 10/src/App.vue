<script setup>
import FibonacciInput from './components/FibonacciInput.vue';
import FibonacciOutput from './components/FibonacciOutput.vue';

import { ref } from "vue"

const
    _value=ref(0)


function setValue(number){
    _value.value=number;
}
</script>

<template>
<div class="app-wrapper">
    <h1>Fibonacci calculator</h1>

    <div>
        <FibonacciInput @input="setValue"></FibonacciInput>
    </div>

    <div>
        <FibonacciOutput :number="_value"></FibonacciOutput>
    </div>
</div>
</template>

<style scoped>
.app-wrapper{
    padding: 1rem;
    margin: 0 auto;
}
</style>
