<script setup>
/**
 * Reads an Integer number and returns it as an event
    Emits the event "input"
 */
import { ref } from "vue"

const 
    $emit=defineEmits(['input'])

const
    _value=ref(0)

function sendEvent(){
    $emit("input", _value.value)
}
</script>

<template>
    <div class="input-field">
        <input type="number" min="0" v-model="_value">
        <button @click="sendEvent()">Calculate</button>
    </div>
</template>

<style scoped>
.input-field {
    display: inline-flex;
    border: 1px solid #ccc;
}

.input-field>* {
    border-color: transparent;
    outline: none;
}

input{
    text-align: center;
    padding: 0 1rem;
}
</style>